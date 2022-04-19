import { forwardRef, ReactNode } from 'react';
import { Box } from '../Box/Box';
import { Atoms } from '../sprinkles/sprinkles.css';
import { OmitHTMLProps } from '../types/utils';
import { classnames } from '../utils/classnames';
import * as styles from './Button.css';

export interface ButtonProps extends OmitHTMLProps<HTMLButtonElement> {
  children: ReactNode;
  tone?: keyof typeof styles.tones;
  type?: 'button' | 'submit' | 'reset';
  variant?: keyof typeof styles.variants;
  width?: Atoms['width'];
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, className, disabled, onClick, tone, type = 'button', variant, width, ...restProps },
  ref,
) {
  return (
    <Box
      ref={ref}
      as="button"
      className={classnames(
        styles.button,
        variant && styles.variants[variant],
        tone && styles.tones[tone],
        className,
      )}
      paddingX="large"
      paddingY="xsmall"
      fontSize="small"
      display="flex"
      alignItems="center"
      justifyContent="center"
      width={width}
      disabled={disabled}
      onClick={onClick}
      type={type}
      {...restProps}
    >
      {children}
    </Box>
  );
});
