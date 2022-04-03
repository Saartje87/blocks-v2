import { Box } from '../Box/Box';
import { FC, MouseEvent, ReactNode } from 'react';
import { Atoms } from '../sprinkles/sprinkles.css';
import { classnames } from '../utils/classnames';

export interface ButtonProps extends Pick<Atoms, 'width'> {
  children: ReactNode;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit';
  className?: string;
  secondary?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  disabled,
  onClick,
  type = 'button',
  width,
}) => {
  return (
    <Box
      as="button"
      alignItems="center"
      // backgroundColor={disabled ? 'lightGray' : secondary ? 'secondary' : 'primary'}
      className={classnames('Button', disabled && 'is-disabled', className)}
      color="white"
      disabled={disabled}
      display="flex"
      fontSize="small"
      justifyContent="center"
      onClick={onClick}
      paddingX="large"
      paddingY="xsmall"
      type={type}
      width={width}
    >
      {children}
    </Box>
  );
};
