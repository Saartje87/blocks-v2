import { styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { responsiveConfig } from '../../css/sprinkles/sprinkles.css';
import { vars } from '../../css/theme.css';

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

const negativeSpace = mapProperty(vars.space, (value) => calc.multiply(value as string, -1));

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

type SpanVariants<T extends number> = Record<
  T,
  {
    flex: string;
    maxWidth: string;
  }
>;

type OffsetVariants<T extends number> = Record<
  T,
  {
    marginLeft: string;
  }
>;

// TODO Should be reponsive to breakpoints
// TODO Does grid handle gutters / gap better?
function createSpanStyles(): SpanVariants<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12> {
  const spanStyles: SpanVariants<number> = {};
  for (let i = 1; i <= 12; i++) {
    spanStyles[i] = {
      flex: `0 0 ${(i / 12) * 100}%`,
      maxWidth: `${(i / 12) * 100}%`,
    };
  }
  return spanStyles;
}

function createOffsetStyles(): OffsetVariants<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11> {
  const offsetStyles: OffsetVariants<number> = {};
  for (let i = 1; i <= 11; i++) {
    offsetStyles[i] = {
      marginLeft: `${(i / 12) * 100}%`,
    };
  }
  return offsetStyles;
}

export const spans = styleVariants(createSpanStyles());
export const offsets = styleVariants(createOffsetStyles());
