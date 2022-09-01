import { FC, InputHTMLAttributes, ReactNode } from 'react';
import { classnames } from '../../utils';
import { useComponentStyles } from '../BlocksProvider/useComponentStyles';
import { Box } from '../Box';
import { Text } from '../Text';
import * as styles from './Radio.css';

export type RadioProps = {
  className?: string;
  name: string;
  label: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

export const Radio: FC<RadioProps> = ({ className, name, label, ...restProps }) => {
  const radioClassName = useComponentStyles('radio', { radio: true });

  return (
    <Box as="label" display="flex" alignItems="center" className={className}>
      <Box marginRight="medium">
        <input type="radio" name={name} className={styles.input} {...restProps} />
        <Box
          cursor="pointer"
          display="flex"
          placeItems="center"
          className={classnames(styles.radio, radioClassName)}
        >
          <div className={styles.radioMark} />
        </Box>
      </Box>
      <Text>{label}</Text>
    </Box>
  );
};
