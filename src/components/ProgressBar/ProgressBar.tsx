import { FC } from 'react';
import { Atoms } from '../../css/sprinkles/sprinkles.css';
import { classnames } from '../../utils';
import { useComponentStyles } from '../BlocksProvider/useComponentStyles';
import { Box } from '../Box';
import * as styles from './ProgressBar.css';

export type ProgressBarProps = {
  // 0 - 100
  value: number;
  backgroundColor?: Atoms['backgroundColor'];
  barColor?: Atoms['backgroundColor'];
  className?: string;
  speed?: 'none' | keyof typeof styles.transitions;
};

export const ProgressBar: FC<ProgressBarProps> = ({
  value,
  backgroundColor = 'textLight',
  barColor = 'primary',
  className,
  speed = 'fast',
}) => {
  const containerClassName = useComponentStyles('progressBar', { container: true });
  const barClassName = useComponentStyles('progressBar', { bar: true });
  const transition = speed !== 'none' ? styles.transitions[speed] : undefined;

  return (
    <Box
      backgroundColor={backgroundColor}
      width="full"
      overflow="hidden"
      className={classnames(containerClassName, className)}
    >
      <Box
        backgroundColor={barColor}
        width="full"
        height="full"
        className={classnames(barClassName, transition)}
        style={{ transform: `translateX(-${100 - value}%)` }}
      />
    </Box>
  );
};
