import { ComplexStyleRule, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { responsiveConfig } from '../../css/sprinkles/sprinkles.css';
import { breakpoints, vars } from '../../css/theme.css';
import { BreakpointKeys } from '../../utils/css';

// TODO Move collapsibleAtoms to a separate file?
function mapProperty<Data extends Record<string, string>>(
  data: Data,
  mapData: <Key extends keyof Data>(value: Data[Key], key: Key) => string,
): Record<keyof Data, string> {
  const classMap: Record<keyof Data, string> = { ...data };

  for (const key in data) {
    classMap[key] = mapData(data[key], key);
  }

  return classMap;
}

const negativeSpace = mapProperty(vars.space, (value) => calc.negate(value as string));

const collapsibleResponsiveStyles = defineProperties({
  ...responsiveConfig,
  properties: {
    marginTop: negativeSpace,
    marginLeft: negativeSpace,
  },
  shorthands: {
    negativeMarginTop: ['marginTop'],
    negativeMarginLeft: ['marginLeft'],
  },
});

export const collapsibleAtoms = createSprinkles(collapsibleResponsiveStyles);

type BreakpointRecord<T extends number> = Record<`${BreakpointKeys}-${T}`, ComplexStyleRule>;

export type OffsetCount = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
export type SpanCount = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

function createResponsiveStyles<T extends number>(
  length: number,
  createStyle: (index: number) => Record<string, string>,
): BreakpointRecord<T> {
  const styles: BreakpointRecord<number> = {};
  const breakpointKeys = Object.keys(breakpoints);

  for (const [i, breakpointKey] of breakpointKeys.entries()) {
    const breakpoint = breakpointKey as BreakpointKeys;

    for (let j = 1; j <= length; j++) {
      const key = `${breakpoint}-${j}` as `${BreakpointKeys}-${typeof j}`;

      if (i === 0) {
        styles[key] = createStyle(j);
      } else {
        styles[key] = {
          '@media': {
            [`screen and (min-width: ${breakpoints[breakpoint]}px)`]: createStyle(j),
          },
        };
      }
    }
  }

  return styles;
}

const offsetStyles = createResponsiveStyles<OffsetCount>(11, (i) => ({
  marginLeft: `${(i / 12) * 100}%`,
}));
export const offsets = styleVariants(offsetStyles);

const spanStyles = createResponsiveStyles<SpanCount>(12, (i) => ({
  flex: `0 0 ${(i / 12) * 100}%`,
  maxWidth: `${(i / 12) * 100}%`,
}));
export const spans = styleVariants(spanStyles);
