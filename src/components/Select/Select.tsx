import { forwardRef, InputHTMLAttributes, ReactElement, useId } from 'react';
import { classnames } from '../../utils';
import { useComponentStyles } from '../BlocksProvider';
import { Box } from '../Box';
import { Icon } from '../Icon';
import * as styles from './select.css';

export type SelectProps = {
  children: ReactElement<HTMLOptionElement> | ReactElement<HTMLOptionElement>[];
  className?: string;
  label?: string;
  name: string;
} & Omit<InputHTMLAttributes<HTMLSelectElement>, 'color' | 'width' | 'height'>;

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { children, className, label, placeholder, name, ...props },
  ref,
) {
  const id = useId();
  const containerClassName = useComponentStyles('textInput', { container: true });
  const inputClassName = useComponentStyles('textInput', { input: true });
  const labelClassName = useComponentStyles('textInput', { label: true });

  return (
    <Box>
      {!!label && (
        <Box
          as="label"
          display="block"
          htmlFor={id}
          paddingX="medium"
          marginBottom="small"
          className={labelClassName}
        >
          {label}
        </Box>
      )}

      <Box
        display="flex"
        position="relative"
        overflow="hidden"
        className={classnames(containerClassName, className)}
      >
        <select
          ref={ref}
          id={id}
          className={classnames(styles.select, inputClassName)}
          name={name}
          {...props}
        >
          {placeholder && (
            <option className={styles.placeholder} value="">
              {placeholder}
            </option>
          )}
          {children}
        </select>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="absolute"
          top={0}
          right={0}
          bottom={0}
          paddingRight="large"
          paddingLeft="small"
          backgroundColor="white"
          pointerEvents="none"
        >
          <Icon name="chevron-down" size="small" color="text" />
        </Box>
      </Box>
    </Box>
  );
});
