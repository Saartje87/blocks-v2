import {
  forwardRef,
  KeyboardEvent,
  TextareaHTMLAttributes,
  useCallback,
  useId,
  useState,
} from 'react';
import { useIsomorphicLayoutEffect } from '../../hooks';
import { useComponentStyles } from '../BlocksProvider';
import { Box } from '../Box';
import * as styles from './textarea.css';

function getScrollHeight(element: HTMLTextAreaElement): number {
  element.style.height = 'auto';
  const height = element.scrollHeight;
  element.style.height = 'inherit';

  return height;
}

export type TextAreaProps = {
  children?: string;
  label?: string;
  autoGrow?: boolean;
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'color' | 'width' | 'height'>;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function TextArea(
  { children, label, onInput, autoGrow, ...restProps },
  ref,
) {
  const id = useId();
  const [height, setHeight] = useState<number | undefined>();
  const containerClassName = useComponentStyles('textInput', { container: true });
  const labelClassName = useComponentStyles('textInput', { label: true });

  const onInputHandler = useCallback(
    (event: KeyboardEvent<HTMLTextAreaElement>) => {
      if (autoGrow) {
        setHeight(getScrollHeight(event.currentTarget));
      }

      if (onInput) {
        onInput(event);
      }
    },
    [autoGrow],
  );

  useIsomorphicLayoutEffect(() => {
    if (autoGrow) {
      const textarea = document.getElementById(id) as HTMLTextAreaElement;
      setHeight(getScrollHeight(textarea));
    }
  }, [autoGrow]);

  return (
    <Box>
      <Box
        as="label"
        display="block"
        htmlFor={id}
        paddingX="medium"
        marginBottom="small"
        className={labelClassName}
      >
        {label}
      </Box>
      <Box className={containerClassName}>
        <Box style={{ height }}>
          <Box
            as="textarea"
            ref={ref}
            id={id}
            display="block"
            width="full"
            className={styles.textarea}
            onInput={onInputHandler}
            {...restProps}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
});
