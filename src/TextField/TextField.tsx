import { forwardRef, HTMLProps, ReactNode } from 'react';
import { classnames } from '../utils/classnames';
import * as styles from './TextField.css';

export interface TextFieldProps extends HTMLProps<HTMLInputElement> {
  value?: string;
  className?: string;
  name: string;
  placeholder?: string;
  label?: string;
  ['data-testId']?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(function TextInput(
  { value, className, iconLeft, iconRight, ...restProps },
  ref,
) {
  return (
    <div className={classnames(styles.container, className)}>
      {iconLeft}
      <input ref={ref} type="text" value={value} className={styles.input} {...restProps} />
      {iconRight}
    </div>
  );
});
