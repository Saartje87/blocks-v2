import { FC, InputHTMLAttributes, ReactNode } from 'react';
import { classnames } from '../../utils';
import { useComponentStyles } from '../BlocksProvider/useComponentStyles';
import { Box } from '../Box';
import { Text } from '../Text';
import * as styles from './Checkbox.css';

export type CheckboxProps = {
  className?: string;
  name: string;
  label: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

export const Checkbox: FC<CheckboxProps> = ({ className, name, label, ...restProps }) => {
  const checkboxClassName = useComponentStyles('checkbox', { checkbox: true });

  return (
    <Box as="label" display="flex" alignItems="center" className={className}>
      <Box marginRight="medium">
        <input type="checkbox" name={name} className={styles.input} {...restProps} />
        <Box
          cursor="pointer"
          display="flex"
          placeItems="center"
          className={classnames(styles.checkbox, checkboxClassName)}
        >
          <svg className={styles.checkboxMark} viewBox="0 0 512 512">
            <path
              fill="currentColor"
              d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.31 0z"
            />
          </svg>
        </Box>
      </Box>
      <Text>{label}</Text>
    </Box>
  );
};
