import { FC, ReactElement } from 'react';
import { Atoms } from '../../css/sprinkles/sprinkles.css';
import { breakpoints } from '../../css/theme.css';
import { classnames } from '../../utils';
import { BreakpointKeys, ResponsiveDisplayFlex } from '../../utils/css';
import { flattenChildren } from '../../utils/flattenChildren/flattenChildren';
import { Box } from '../Box';
import { ColProps, Offset } from './Col';
import * as styles from './Grid.css';
import { collapsibleAtoms } from './Grid.css';

const breakpointKeys = Object.keys(breakpoints) as BreakpointKeys[];

function getStyles<T extends string>(
  items: number | undefined | number[],
  styles: Record<string, string>,
) {
  const mapper = Array.isArray(items) ? items || 0 : [items];

  return mapper.map((item, index) => {
    const breakpointName = breakpointKeys[index];

    return styles[`${breakpointName}-${item}`];
  }) as T[];
}

export type RowProps = {
  children?: ReactElement<ColProps> | ReactElement<ColProps>[];
  className?: string;
  gap?: Atoms['gap'];
  display?: ResponsiveDisplayFlex;
};

export const Row: FC<RowProps> = ({ children, className, gap, ...restProps }) => {
  const items = flattenChildren<ReactElement<ColProps>>(children);

  // Validate that a grid of 12 columns is used
  if (process.env.NODE_ENV === 'development') {
    const count = [0, 0, 0];

    // eslint-disable-next-line no-inner-declarations
    function getOffset(offset: Offset | undefined, index: number): number {
      if (Array.isArray(offset)) {
        return offset[index];
      }

      return offset || 0;
    }

    for (const item of items) {
      const span = item.props.span;
      if (Array.isArray(span)) {
        // eslint-disable-next-line unicorn/no-array-for-each
        span.forEach((span, index) => {
          count[index] += span + getOffset(item.props.offset, index);
        });
      } else {
        count[0] += (item.props.span as number) + getOffset(item.props.offset, 0);
      }
    }

    if (!count.every((c) => c === 12 || c === 0)) {
      throw new Error(`The sum of the span and offset of the columns must be 12. Got ${count}`);
    }
  }

  return (
    <Box
      className={classnames(className, collapsibleAtoms({ negativeMarginLeft: gap }))}
      display="flex"
      flexWrap="nowrap"
      flexDirection="row"
      {...restProps}
    >
      {items.map((child, key) => {
        const offsetStyles = getStyles<`${BreakpointKeys}-${styles.OffsetCount}`>(
          child.props.offset,
          styles.offsets,
        );
        const spanStyles = getStyles<`${BreakpointKeys}-${styles.SpanCount}`>(
          child.props.span,
          styles.spans,
        );

        return (
          <Box
            key={child.key || key}
            paddingLeft={gap}
            className={classnames(...spanStyles, ...offsetStyles)}
          >
            {child}
          </Box>
        );
      })}
    </Box>
  );
};
