import { FC, ReactNode } from 'react';
import { Box } from '../Box/Box';
import { Atoms } from '../sprinkles/sprinkles.css';

const alignMap = {
  left: 'flex-start',
  right: 'flex-end',
  center: 'center',
  between: 'space-between',
  around: 'space-around',
} as const;

export interface InlineProps {
  children: ReactNode;
  gap: Atoms['gap'];
  align?: keyof typeof alignMap;
}

export const Inline: FC<InlineProps> = ({ children, gap, align }) => {
  return (
    <Box
      display="flex"
      gap={gap}
      flexDirection="row"
      justifyContent={align ? alignMap[align] : undefined}
      flexWrap="wrap"
    >
      {children}
    </Box>
  );
};
