import { CSSProperties, FC, ReactNode } from 'react';
import { classnames } from '../../utils';
import { Box } from '../Box';
import * as styles from './Swipe.css';

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export const SwipePanel: FC<Props> = ({ children, className, ...restProps }) => {
  return (
    <Box
      width="full"
      height="full"
      className={classnames(styles.swipePanel, className)}
      {...restProps}
    >
      {children}
    </Box>
  );
};
