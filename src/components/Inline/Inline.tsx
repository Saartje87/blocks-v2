import { FC, ReactNode } from 'react';
import { Atoms } from '../../css/sprinkles/sprinkles.css';
import { Box } from '../Box/Box';

const alignMap = {
  left: 'flex-start',
  right: 'flex-end',
  center: 'center',
  between: 'space-between',
  around: 'space-around',
} as const;

export interface InlineProps {
  as?: 'div' | 'ul' | 'ol';
  children: ReactNode;
  align?: keyof typeof alignMap;
  gap: Atoms['gap'];
}

export const Inline: FC<InlineProps> = ({ as, children, gap, align }) => {
  return (
    <Box
      as={as}
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
