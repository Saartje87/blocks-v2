import { FC, ReactElement } from 'react';
import { Atoms } from '../../css/sprinkles/sprinkles.css';
import { classnames } from '../../utils';
import { flattenChildren } from '../../utils/flattenChildren/flattenChildren';
import { Box } from '../Box';
import { ColProps } from './Col';
import * as styles from './Grid.css';
import { collapsibleAtoms } from './Grid.css';

export type RowProps = {
  children?: ReactElement<ColProps> | ReactElement<ColProps>[];
  className?: string;
  gap?: Atoms['gap'];
};

export const Row: FC<RowProps> = ({ children, className, gap, ...restProps }) => {
  const items = flattenChildren<ReactElement<ColProps>>(children);

  if (process.env.NODE_ENV === 'development') {
    // TODO Make sure that the sum of the span is 12
    const total = items.reduce((acc, item) => acc + item.props.span + (item.props.offset || 0), 0);

    if (total !== 12) {
      throw new Error(`The sum of the span and offset of the columns must be 12. Got ${total}`);
    }
  }

  return (
    <Box
      className={classnames(className, collapsibleAtoms({ negativeMarginLeft: gap }))}
      display="flex"
      flexWrap="wrap"
      flexDirection="row"
      {...restProps}
    >
      {items.map((child, key) => (
        <Box
          key={child.key || key}
          paddingLeft={gap}
          className={classnames(
            styles.spans[child.props.span],
            child.props.offset && styles.offsets[child.props.offset],
          )}
        >
          {child}
        </Box>
      ))}
    </Box>
  );
};
