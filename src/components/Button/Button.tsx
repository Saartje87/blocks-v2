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
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, className, type = 'button', variant = 'solid', width, ...restProps },
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
      {...restProps}
    >
      {children}
    </Box>
  );
});
