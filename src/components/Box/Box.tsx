import { ComponentProps, ElementType, forwardRef, ReactElement } from 'react';
import { atoms, Atoms } from '../../css/sprinkles/sprinkles.css';
import { classnames } from '../../utils/classnames';

type OwnProps<T extends ElementType = ElementType> = {
  className?: string;
  as?: T;
} & Atoms;

// TODO Can we use HtmlHTMLAttributes to correctly type events?
export type BoxProps<T extends ElementType> = OwnProps<T> & Omit<ComponentProps<T>, keyof OwnProps>;

const defaultElement = 'div';

export const Box: <T extends ElementType = typeof defaultElement>(
  props: BoxProps<T>,
) => ReactElement | null = forwardRef<Element, OwnProps>(function Box(
  { className, as: Component = defaultElement, ...restProps },
  ref,
) {
  const atomProps: Record<string, unknown> = {};
  const otherProps: Record<string, unknown> = {};

  Object.entries(restProps).forEach(([name, value]) => {
    if ((atoms.properties as Set<string>).has(name)) {
      atomProps[name] = value;
    } else {
      otherProps[name] = value;
    }
  });

  return (
    <Component ref={ref} className={classnames(className, atoms(atomProps))} {...otherProps} />
  );
});
