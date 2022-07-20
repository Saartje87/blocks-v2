import { FC, MouseEvent, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { useLayer } from '../../hooks/useFlip/useLayer';
import { useFocusLock } from '../../hooks/useFocusLock/useFocusLock';
import { usePreventBodyScroll } from '../../hooks/usePreventBodyScroll/usePreventBodyScroll';
import { classnames } from '../../utils/classnames';
import { focusFirstElement, restoreFocus } from '../../utils/focusable';
import { useComponentStyles } from '../BlocksProvider/useComponentStyles';
import { Box } from '../Box';
import { Portal } from '../Portal/Portal';
import * as styles from './Dialog.css';

export interface DialogProps {
  children?: ReactNode;
  open: boolean;
  onRequestClose: () => void;
  className?: string;
}

export const Dialog: FC<DialogProps> = ({ children, open, className, onRequestClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const layer = useLayer();
  const [visible, setVisible] = useState(open);

  // Trap focus inside the dialog
  useFocusLock({ ref: dialogRef, active: open });

  // On outside click, close the dialog
  const onBackdropClick = useCallback(
    (event: MouseEvent) => {
      if (event.target === event.currentTarget) {
        onRequestClose();
      }
    },
    [onRequestClose],
  );

  const onAnimationEnd = useCallback((event: React.AnimationEvent<HTMLDivElement>) => {
    if (event.animationName === styles.backdropLeaveAnimation) {
      setVisible(false);
      restoreFocus();
    }
  }, []);

  // Prevent body scroll when dialog is open
  usePreventBodyScroll(visible);

  useEffect(() => {
    if (open) {
      setVisible(true);
    }
  }, [open]);

  // On Escape key press, close the dialog
  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onRequestClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  // Focus first focusable element when dialog opens
  useEffect(() => {
    if (open && dialogRef.current) {
      focusFirstElement(dialogRef.current);
    }
  }, [open]);

  const backdropClassName = useComponentStyles('dialog', { backdrop: true });

  if (!open && !visible) {
    return null;
  }

  return (
    <Portal container={layer()}>
      <Box
        className={classnames(styles.backdrop, backdropClassName, !open && styles.backdropLeave)}
        display="flex"
        placeItems="center"
        onClick={onBackdropClick}
        onAnimationEnd={onAnimationEnd}
      >
        <Box
          ref={dialogRef}
          as="dialog"
          open
          display="flex"
          flexDirection="column"
          padding="gutter"
          border="none"
          className={classnames(styles.dialog, !open && styles.dialogLeave, className)}
        >
          {children}
        </Box>
      </Box>
    </Portal>
  );
};
