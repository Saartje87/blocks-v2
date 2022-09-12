import { ElementType, forwardRef, ReactElement } from 'react';
import { Atoms } from '../../css/sprinkles/sprinkles.css';
import { classnames } from '../../utils/classnames';
import { useBlocksContext } from '../BlocksProvider/useBlocksContext';
import { useComponentStyles } from '../BlocksProvider/useComponentStyles';
import { Box, BoxProps } from '../Box';
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
  const { linkComponent: LinkComponent } = useBlocksContext();
  const linkClassName = useComponentStyles('link', { base: true });

  if (LinkComponent) {
    return (
      <LinkComponent className={classnames(linkClassName, className)} {...restProps} ref={ref} />
    );
  }

  return (
    <Box
      as={as}
      ref={ref}
      cursor="pointer"
      className={classnames(styles.link, linkClassName, className)}
      {...restProps}
    />
  );
});
