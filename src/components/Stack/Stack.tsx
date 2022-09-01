import { FC, ReactNode } from 'react';
import { Atoms } from '../../css/sprinkles/sprinkles.css';
import { Box } from '../Box/Box';

const alignMap = {
  left: 'flex-start',
  right: 'flex-end',
  center: 'center',
  stretch: 'stretch',
} as const;

export interface StackProps {
  as?: 'div' | 'section' | 'ul' | 'ol';
  children: ReactNode;
  align?: keyof typeof alignMap;
  gap: Atoms['gap'];
  padding?: Atoms['padding'];
  paddingLeft?: Atoms['paddingLeft'];
  paddingRight?: Atoms['paddingRight'];
  paddingTop?: Atoms['paddingTop'];
  paddingBottom?: Atoms['paddingBottom'];
  paddingX?: Atoms['paddingX'];
  paddingY?: Atoms['paddingY'];
}

export const Stack: FC<StackProps> = ({ as, children, gap, align, ...restProps }) => {
  return (
    <Box
      as={as}
      display="flex"
      gap={gap}
      flexDirection="column"
      alignItems={align ? alignMap[align] : undefined}
      {...restProps}
    >
      {children}
    </Box>
  );
};
