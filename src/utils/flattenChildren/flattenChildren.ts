import { Children, Fragment, isValidElement, ReactNode } from 'react';

/**
 * Flatten ReactNode
 *
 * @param children ReactNode
 * @param childrenArray ReactChild[]
 * @returns ReactChild[]
 */
export function flattenChildren<T extends ReactNode = ReactNode>(
  children: ReactNode,
  childrenArray: ReactNode[] = [],
): T[] {
  const items = Children.toArray(children);

  items.forEach((item) => {
    if (isValidElement(item)) {
      if (item.type === Fragment) {
        flattenChildren(item.props.children, childrenArray);
      } else {
        childrenArray.push(item);
      }
    } else if (typeof item === 'string' || typeof item === 'number') {
      childrenArray.push(item);
    }
  });

  return childrenArray as T[];
}
