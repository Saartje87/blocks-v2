import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import { classnames } from '../../utils';
import { useComponentStyles } from '../BlocksProvider/useComponentStyles';
import { Box } from '../Box';
import * as styles from './Input.css';

export type TextInputProps = {
  className?: string;
  name: string;
  type?: 'email' | 'number' | 'password' | 'tel' | 'text' | 'url';
  left?: ReactNode;
  right?: ReactNode;
  label: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'color' | 'width' | 'height' | 'placeholder'>;

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(function TextInput(
  { className, name, type = 'text', left, right, label, ...restProps },
  ref,
) {
  const containerClassName = useComponentStyles('textInput', { container: true });
  const inputClassName = useComponentStyles('textInput', { input: true });
  const labelClassName = useComponentStyles('textInput', { label: true });

  return (
    <Box
      as="label"
      display="flex"
      alignItems="center"
      className={classnames(containerClassName, className)}
    >
      {left && <Box paddingRight="medium">{left}</Box>}
      <Box position="relative" flexGrow={1}>
        <Box
          as="input"
          ref={ref}
          name={name}
          type={type}
          placeholder={label}
          fontSize="medium"
          fontWeight="medium"
          className={classnames(styles.input, inputClassName)}
          {...restProps}
        />
        <Box
          position="absolute"
          top={0}
          fontSize="medium"
          fontWeight="medium"
          className={labelClassName}
        >
          {label}
        </Box>
      </Box>
      {right && <Box paddingLeft="medium">{right}</Box>}
    </Box>
  );
});
