import { FC, ReactNode } from 'react';
import { Atoms } from '../../css/sprinkles/sprinkles.css';
import { MarginAndPaddingAtoms, ResponsiveDisplayFlex } from '../../utils/css';
import { Box } from '../Box/Box';

const justifyContentMap = {
  left: 'flex-start',
  right: 'flex-end',
  center: 'center',
  between: 'space-between',
  around: 'space-around',
} as const;

export type InlineProps = {
  as?: 'div' | 'ul' | 'ol';
  children: ReactNode;
  alignX?: keyof typeof justifyContentMap;
  gap: Atoms['gap'];
  display?: ResponsiveDisplayFlex;
} & MarginAndPaddingAtoms;

export const Inline: FC<InlineProps> = ({
  as,
  children,
  gap,
  alignX,
  display = 'flex',
  ...props
}) => {
  return (
    <Box
      as={as}
      display={display}
      gap={gap}
      flexDirection="row"
      justifyContent={alignX ? justifyContentMap[alignX] : undefined}
      flexWrap="wrap"
      {...props}
    >
      {children}
    </Box>
  );
};
