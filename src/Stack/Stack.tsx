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
  children: ReactNode;
  gap: Atoms['gap'];
  align?: keyof typeof alignMap;
}

export const Stack: FC<StackProps> = ({ children, gap, align }) => {
  return (
    <Box
      display="flex"
      gap={gap}
      flexDirection="column"
      alignItems={align ? alignMap[align] : undefined}
    >
      {children}
    </Box>
  );
};
