import { FC } from 'react';
import { Atoms } from '../../css/sprinkles/sprinkles.css';
import { classnames } from '../../utils';
import { useBlocksContext } from '../BlocksProvider/useBlocksContext';
import { Box } from '../Box';
import * as styles from './Icon.css';

export type IconProps = {
  name:
    | 'arrowdown'
    | 'calendar'
    | 'delete'
    | 'heart'
    | 'more'
    | 'plus'
    | 'show'
    | 'user'
    | 'audio'
    | 'camera'
    | 'download'
    | 'hide'
    | 'night'
    | 'poll'
    | 'smile'
    | 'walk'
    | 'back'
    | 'car'
    | 'dropdown'
    | 'home'
    | 'nutrition'
    | 'search'
    | 'sparkle'
    | 'water'
    | 'badge'
    | 'comment'
    | 'feed'
    | 'lock'
    | 'pause'
    | 'send'
    | 'star'
    | 'weight'
    | 'bookmark'
    | 'copy'
    | 'fire'
    | 'message'
    | 'place'
    | 'setting'
    | 'swim'
    | 'bus'
    | 'day'
    | 'health'
    | 'minus'
    | 'play'
    | 'share'
    | 'time';
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
