import { forwardRef, ReactNode } from 'react';
import { Atoms } from '../../css/sprinkles/sprinkles.css';
import { OmitHTMLProps } from '../../types/utils';
import { classnames } from '../../utils/classnames';
import { useComponentStyles } from '../BlocksProvider/useComponentStyles';
import { Box } from '../Box/Box';
import * as styles from './Button.css';

export interface ButtonProps extends OmitHTMLProps<HTMLButtonElement> {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'flat' | 'solid';
  width?: Atoms['width'];
  boxShadow?: Atoms['boxShadow'];
  left?: ReactNode;
  right?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    children,
    className,
    type = 'button',
    variant = 'solid',
    width,
    boxShadow,
    left,
    right,
    ...restProps
  },
  ref,
) {
  const buttonClassName = useComponentStyles('button', { base: true, variant });

  return (
    <Box
      ref={ref}
      as="button"
      className={classnames(styles.buttonReset, buttonClassName, className)}
      width={width}
      type={type}
      boxShadow={boxShadow}
      {...restProps}
    >
      {left && <Box paddingRight="medium">{left}</Box>}
      {children}
      {right && <Box paddingLeft="medium">{right}</Box>}
    </Box>
  );
});
