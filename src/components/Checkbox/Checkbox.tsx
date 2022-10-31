import { FC, InputHTMLAttributes, ReactNode } from 'react';
import { classnames } from '../../utils';
import { useComponentStyles } from '../BlocksProvider/useComponentStyles';
import { Box } from '../Box';
import { Icon } from '../Icon';
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
          <Icon name="check" size="small" className={styles.checkboxMark} />
        </Box>
      </Box>
      <Text>{label}</Text>
    </Box>
  );
};
