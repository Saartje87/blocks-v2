import { FC, ReactNode } from 'react';
import { Box } from '../Box/Box';
import { Atoms } from '../sprinkles/sprinkles.css';

export interface TextProps {
  children: ReactNode;
  as?: 'span' | 'p' | 'strong' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: Atoms['color'];
  fontSize?: Atoms['fontSize'];
  fontWeight?: Atoms['fontWeight'];
  fontFamily?: Atoms['fontFamily'];
  textAlign?: Atoms['textAlign'];
}

export const Text: FC<TextProps> = ({
  as = 'span',
  children,
  color,
  fontSize,
  fontWeight,
  fontFamily,
  textAlign,
}) => {
  return (
    <Box
      as={as}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      fontFamily={fontFamily}
      textAlign={textAlign}
    >
      {children}
    </Box>
  );
};
