import { forwardRef, HTMLProps, ReactNode } from 'react';
import { classnames } from '../utils/classnames';
import * as styles from './TextInput.css';

export interface TextInputProps extends HTMLProps<HTMLInputElement> {
  value?: string;
  className?: string;
  name: string;
  placeholder?: string;
  label?: string;
  ['data-testId']?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

// TextField?
export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(function TextInput(
  { value, className, iconLeft, iconRight, ...restProps },
  ref,
) {
  return (
    <div className={classnames(styles.textInputContainer, className)}>
      {iconLeft}
      <input
        ref={ref}
        type="text"
        value={value}
        className={styles.textInputContainer}
        {...restProps}
      />
      {iconRight}
    </div>
  );
});
