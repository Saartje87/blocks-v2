import { FC, ReactNode } from 'react';
import { Box } from '../Box';
import { Atoms } from '../sprinkles/sprinkles.css';

interface ComponentProps {
  as: 'h1' | 'h2' | 'h3' | 'h4';
  fontSize: Atoms['fontSize'];
}

interface ResolveComponentMap {
  '1': ComponentProps;
  '2': ComponentProps;
  '3': ComponentProps;
  '4': ComponentProps;
}

const resolveComponent: ResolveComponentMap = {
  '1': { as: 'h1', fontSize: 'xlarge' },
  '2': { as: 'h2', fontSize: 'large' },
  '3': { as: 'h3', fontSize: 'standard' },
  '4': { as: 'h4', fontSize: 'small' },
};

export interface HeadingProps {
  level: keyof ResolveComponentMap;
  children: ReactNode;
  align?: Atoms['textAlign'];
  fontSize?: Atoms['fontSize'];
  fontWeight?: Atoms['fontWeight'];
  fontFamily?: Atoms['fontFamily'];
}

export const Heading: FC<HeadingProps> = ({
  level = '1',
  children,
  align,
  fontSize,
  fontWeight,
  fontFamily,
}) => {
  const resolvedProps = resolveComponent[level];

  return (
    <Box
      as={resolvedProps.as}
      fontFamily={fontFamily}
      fontWeight={fontWeight || 'strong'}
      fontSize={fontSize || resolvedProps.fontSize}
      textAlign={align}
      padding="none"
      margin="none"
    >
      {children}
    </Box>
  );
};