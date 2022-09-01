import {
  AnimationEvent,
  createContext,
  FC,
  MouseEvent,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useFocusLock, useLayer, usePreventBodyScroll, useVisibilityState } from '../../hooks';
import { classnames } from '../../utils/classnames';
import { focusFirstElement, restoreFocus } from '../../utils/focusable';
import { useComponentStyles } from '../BlocksProvider/useComponentStyles';
import { Box } from '../Box';
import { Portal } from '../Portal/Portal';
import * as styles from './Dialog.css';

type DialogContextValue = {
  setEnabled: (active: boolean) => void;
};

const DialogContext = createContext<DialogContextValue | undefined>(undefined);

const useNestedDialog = (open: boolean): boolean => {
  const parentDialog = useContext(DialogContext);

  useEffect(() => {
    if (!parentDialog || !open) {
      return;
    }

    parentDialog.setEnabled(false);

    return () => {
      parentDialog.setEnabled(true);
    };
  }, [parentDialog, open]);

  return !!parentDialog;
};

export interface DialogProperties {
  children?: ReactNode;
  open: boolean;
  onRequestClose: () => void;
  className?: string;
}

export const Dialog: FC<DialogProperties> = ({ children, open, className, onRequestClose }) => {
  const dialogReference = useRef<HTMLDialogElement>(null);
  const layer = useLayer();
  const { visible, hide } = useVisibilityState(open);
  const [enabled, setEnabled] = useState(true);

  // On outside click, close the dialog
  const onBackdropClick = useCallback(
    (event: MouseEvent) => {
      if (event.target === event.currentTarget) {
        onRequestClose();
      }
    },
    [onRequestClose],
  );

  const onAnimationEnd = useCallback((event: AnimationEvent<HTMLDivElement>) => {
    if (event.animationName === styles.backdropLeaveAnimation) {
      event.stopPropagation();
      hide();
      restoreFocus();
    }
  }, []);

  // Trap focus inside the dialog
  useFocusLock({ ref: dialogReference, active: open && enabled });

  // Disable functionality of parent dialogs and return boolean if this dialog is nested
  const isNested = useNestedDialog(visible);

  // Prevent body scroll when dialog is open
  // Diable hook for nested dialogs, top level dialog already handles this
  usePreventBodyScroll(visible && !isNested);

  // On Escape key press, close the dialog
  useEffect(() => {
    if (!open || !enabled) {
      return;
    }

    // TODO Only close current dialog when user presses escape, it now closes all dialogs
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onRequestClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, enabled]);

  // TODO Do we want to use this? We can solve it with autofocus dom attribute
  // Focus first focusable element when dialog opens
  useEffect(() => {
    if (open && dialogReference.current) {
      focusFirstElement(dialogReference.current);
    }
  }, [open]);

  const backdropClassName = useComponentStyles('dialog', { backdrop: true });
  const dialogClassName = useComponentStyles('dialog', { base: true });

  if (!visible) {
    return null;
  }

  return (
    <Portal container={layer()}>
      <DialogContext.Provider value={{ setEnabled }}>
        <Box
          className={classnames(styles.backdrop, !open && styles.backdropLeave, backdropClassName)}
          display="flex"
          placeItems="center"
          onClick={onBackdropClick}
          onAnimationEnd={onAnimationEnd}
        >
          <Box
            ref={dialogReference}
            as="dialog"
            open
            display="flex"
            flexDirection="column"
            padding="gutter"
            border="none"
            overflow="hidden"
            className={classnames(
              styles.dialog,
              !open && styles.dialogLeave,
              dialogClassName,
              className,
            )}
          >
            {children}
          </Box>
        </Box>
      </DialogContext.Provider>
    </Portal>
  );
};
