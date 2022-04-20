import { FC, ReactNode } from 'react';
import { Box } from '../Box/Box';
import { Atoms } from '../sprinkles/sprinkles.css';

const alignMap = {
  left: 'flex-start',
  right: 'flex-end',
  center: 'center',
  stretch: 'stretch',
} as const;

export interface StackProps {
  as?: 'div' | 'ul' | 'ol';
  children: ReactNode;
  align?: keyof typeof alignMap;
  gap: Atoms['gap'];
}

export const Stack: FC<StackProps> = ({ as, children, gap, align }) => {
  return (
    <Box
      as={as}
      display="flex"
      gap={gap}
      flexDirection="column"
      alignItems={align ? alignMap[align] : undefined}
    >
      {children}
    </Box>
  );
};
