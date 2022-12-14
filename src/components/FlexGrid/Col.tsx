import { FC, ReactNode } from 'react';
import { Atoms } from '../../css/sprinkles/sprinkles.css';
import { ResponsiveValue } from '../../utils/css';
import { Box } from '../Box';

export type Span = ResponsiveValue<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
export type Offset = ResponsiveValue<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11>;

export type ColProps = {
  children?: ReactNode;
  className?: string;
  span: Span;
  offset?: Offset;
} & Atoms;

export const Col: FC<ColProps> = ({ children, span, offset, ...restProps }) => {
  return <Box {...restProps}>{children}</Box>;
};
