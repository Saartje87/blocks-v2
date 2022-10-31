import { FC, ReactNode } from 'react';
import { Atoms } from '../../css/sprinkles/sprinkles.css';
import { MarginAndPaddingAtoms, ResponsiveDisplayFlex } from '../../utils/css';
import {
  alignItemsMap,
  AlignItemsMap,
  justifyContentMap,
  JustifyContentMap,
} from '../../utils/flexbox';
import { Box } from '../Box/Box';

export type InlineProps = {
  as?: 'div' | 'ul' | 'ol';
  children: ReactNode;
  alignX?: keyof JustifyContentMap;
  alignY?: keyof AlignItemsMap;
  gap: Atoms['gap'];
  display?: ResponsiveDisplayFlex;
} & MarginAndPaddingAtoms;

export const Inline: FC<InlineProps> = ({
  alignX,
  alignY,
  as,
  children,
  display = 'flex',
  gap,
  ...props
}) => {
  return (
    <Box
      as={as}
      display={display}
      gap={gap}
      flexDirection="row"
      justifyContent={alignX ? justifyContentMap[alignX] : undefined}
      alignItems={alignY ? alignItemsMap[alignY] : undefined}
      flexWrap="wrap"
      {...props}
    >
      {children}
    </Box>
  );
};
