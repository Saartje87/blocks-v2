import { FC, ReactNode } from 'react';
import { Atoms } from '../../css/sprinkles/sprinkles.css';
import { MarginAndPaddingAtoms, ResponsiveDisplayFlex } from '../../utils/css';
import { alignItemsMap, AlignItemsMap } from '../../utils/flexbox';
import { Box } from '../Box/Box';

export type StackProps = {
  as?: 'div' | 'section' | 'ul' | 'ol';
  children: ReactNode;
  alignX?: keyof AlignItemsMap;
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
      alignItems={alignX ? alignItemsMap[alignX] : undefined}
      {...restProps}
    >
      {children}
    </Box>
  );
};
