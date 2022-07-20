import { FC, ReactNode } from 'react';
import { Atoms } from '../../css/sprinkles/sprinkles.css';
import { Box } from '../Box/Box';

// TODO Extend with "HTML Attributes"
export interface TextProps {
  children: ReactNode;
  as?: 'span' | 'p' | 'strong';
  color?: Atoms['color'];
  fontSize?: Atoms['fontSize'];
  fontWeight?: Atoms['fontWeight'];
  fontFamily?: Atoms['fontFamily'];
  align?: Atoms['textAlign'];
}

export const Text: FC<TextProps> = ({
  as = 'span',
  children,
  color = 'text',
  fontSize,
  fontWeight,
  fontFamily,
  align,
}) => {
  return (
    <Box
      as={as}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      fontFamily={fontFamily}
      textAlign={align}
      padding="none"
      margin="none"
    >
      {children}
    </Box>
  );
};
