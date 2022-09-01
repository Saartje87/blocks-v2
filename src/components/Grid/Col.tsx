import { FC, ReactNode } from 'react';
import { Atoms } from '../../css/sprinkles/sprinkles.css';
import { Box } from '../Box';

export type ColProps = {
  children?: ReactNode;
  className?: string;
  span: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  offset?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
} & Atoms;

export const Col: FC<ColProps> = ({ children, span, offset, ...restProps }) => {
  return <Box {...restProps}>{children}</Box>;
};
