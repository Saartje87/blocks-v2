import { FC } from 'react';
import { Box } from '../Box';
import * as styles from './Divider.css';

export const Divider: FC = () => {
  return (
    <Box role="separator" width="full" backgroundColor="textLight" className={styles.divider} />
  );
};
