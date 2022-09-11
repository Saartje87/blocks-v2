import { FC, ReactNode } from 'react';
import { Atoms } from '../../css/sprinkles/sprinkles.css';
import { Box } from '../Box';

type HeadingDefaults = Record<'h1' | 'h2' | 'h3' | 'h4', Atoms>;

export const headingDefaults: HeadingDefaults = {
  h1: { fontSize: 'xlarge' },
  h2: { fontSize: 'large' },
  h3: { fontSize: 'medium' },
  h4: { fontSize: 'small' },
};

export interface HeadingProps {
  className?: string;
  level: 1 | 2 | 3 | 4;
  children: ReactNode;
  align?: Atoms['textAlign'];
  fontSize?: Atoms['fontSize'];
  fontWeight?: Atoms['fontWeight'];
  fontFamily?: Atoms['fontFamily'];
}

export const Heading: FC<HeadingProps> = ({
  className,
  level = 1,
  children,
  align,
  fontSize,
  fontWeight = 'strong',
  fontFamily,
}) => {
  const as = `h${level}` as const;
  const defaultStyles = headingDefaults[as];

  return (
    <Box
      as={as}
      className={className}
      fontFamily={fontFamily || defaultStyles.fontFamily}
      fontWeight={fontWeight || defaultStyles.fontWeight}
      fontSize={fontSize || defaultStyles.fontSize}
      textAlign={align}
      padding="none"
      margin="none"
    >
      {children}
    </Box>
  );
};
