import { FC } from 'react';
import { OmitHTMLProps } from '../../types/utils';
import { classnames } from '../../utils';
import { useComponentStyles } from '../BlocksProvider/useComponentStyles';
import { Box } from '../Box';
import { Icon, IconProps } from '../Icon/Icon';
import * as styles from './IconButton.css';

export type IconButtonProps = {
  name: IconProps['name'];
  size: IconProps['size'];
  color: IconProps['color'];
} & Omit<OmitHTMLProps<HTMLButtonElement>, 'size' | 'type'>;

export const IconButton: FC<IconButtonProps> = ({ name, size, color, ...props }) => {
  const iconButtonClassName = useComponentStyles('iconButton', { base: true });

  return (
    <Box
      as="button"
      type="button"
      padding="small"
      className={classnames(styles.iconButton, iconButtonClassName)}
      {...props}
    >
      <Icon name={name} size={size} color={color} />
    </Box>
  );
};
