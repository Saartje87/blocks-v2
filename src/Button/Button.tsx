import { forwardRef, ReactNode } from 'react';
import { Box } from '../Box/Box';
import { Atoms } from '../sprinkles/sprinkles.css';
import { useComponentStyles } from '../ThemeProvider/useComponentStyles';
import { ComponentThemesProps } from '../types/theme';
import { OmitHTMLProps } from '../types/utils';
import { classnames } from '../utils/classnames';
import * as styles from './Button.css';

export interface ButtonProps extends OmitHTMLProps<HTMLButtonElement> {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: ComponentThemesProps['button']['variant'];
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
      paddingX="large"
      paddingY="small"
      fontSize="medium"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      color="text"
      width={width}
      type={type}
      {...restProps}
    >
      {children}
    </Box>
  );
});
