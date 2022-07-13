import { ElementType, forwardRef, ReactElement } from 'react';
import { Box, BoxProps } from '../Box';
import { Atoms } from '../sprinkles/sprinkles.css';
import { useComponentStyles } from '../ThemeProvider/useComponentStyles';
import { classnames } from '../utils/classnames';
import * as styles from './Link.css';

type OwnProps<T extends ElementType = ElementType> = {
  className?: string;
  as?: T;
} & Atoms;

const defaultElement = 'a';

export const Link: <T extends ElementType = typeof defaultElement>(
  props: BoxProps<T>,
) => ReactElement | null = forwardRef<Element, OwnProps>(function Link(
  { as = defaultElement, className, ...restProps },
  ref,
) {
  const linkClassName = useComponentStyles('link');

  return (
    <Box
      as={as}
      ref={ref}
      className={classnames(styles.link, linkClassName, className)}
      {...restProps}
    />
  );
});
