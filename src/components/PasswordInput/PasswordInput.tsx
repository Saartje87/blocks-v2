import { FC, useState } from 'react';
import { IconButton } from '../IconButton/IconButton';
import { TextInput, TextInputProps } from '../TextInput';

export type PasswordInputProps = Omit<TextInputProps, 'type'>;

export const PasswordInput: FC<PasswordInputProps> = ({ ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextInput
      type={showPassword ? 'text' : 'password'}
      right={
        <IconButton
          name={showPassword ? 'eye-slash' : 'eye'}
          size="medium"
          color="text"
          onClick={() => setShowPassword((shown) => !shown)}
          label={showPassword ? 'Hide password' : 'Show password'}
        />
      }
      {...props}
    />
  );
};
