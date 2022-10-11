import { FC } from 'react';
import { Atoms } from '../../css/sprinkles/sprinkles.css';
import { classnames } from '../../utils';
import { useBlocksContext } from '../BlocksProvider/useBlocksContext';
import { Box } from '../Box';
import * as styles from './Icon.css';
import { IconNames } from './iconNames';

export type IconProps = {
  name: IconNames;
  size?: keyof typeof styles.sizes;
  className?: string;
  color?: Atoms['color'];
  label?: string;
};

export const Icon: FC<IconProps> = ({
  name,
  className,
  size = 'medium',
  color = 'text',
  label,
}) => {
  const { spriteUrl } = useBlocksContext();

  return (
    <Box
      as="svg"
      viewBox="0 0 100 100"
      color={color}
      className={classnames(styles.sizes[size], className)}
      aria-label={label}
    >
      <use className={styles.iconColor} href={`${spriteUrl}#${name}`} />
    </Box>
  );
};
