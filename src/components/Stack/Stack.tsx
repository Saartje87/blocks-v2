import { FC, ReactNode } from 'react';
import { Atoms } from '../../css/sprinkles/sprinkles.css';
import { MarginAndPaddingAtoms, ResponsiveDisplayFlex } from '../../utils/css';
import { Box } from '../Box/Box';

const alignMap = {
  left: 'flex-start',
  right: 'flex-end',
  center: 'center',
  stretch: 'stretch',
} as const;

export type StackProps = {
  as?: 'div' | 'section' | 'ul' | 'ol';
  children: ReactNode;
  alignX?: keyof typeof alignMap;
  gap: Atoms['gap'];
  display?: ResponsiveDisplayFlex;
} & MarginAndPaddingAtoms;

export const Stack: FC<StackProps> = ({
  as,
  display = 'flex',
  children,
  gap,
  alignX,
  ...restProps
}) => {
  return (
    <Box
      as={as}
      display={display}
      gap={gap}
      flexDirection="column"
      alignItems={alignX ? alignMap[alignX] : undefined}
      {...restProps}
    >
      {children}
    </Box>
  );
};
