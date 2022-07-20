import { RefObject, useEffect } from 'react';
import { focusFirstElement } from '../../utils/focusable';

type UseFocusLock = {
  ref: RefObject<HTMLElement>;
  active: boolean;
};

export const useFocusLock = ({ ref, active }: UseFocusLock) => {
  useEffect(() => {
    if (!active) {
      return;
    }

    const handleFocus = (event: FocusEvent) => {
      if (ref.current && event.target instanceof HTMLElement) {
        if (!ref.current.contains(event.target)) {
          focusFirstElement(ref.current);
        }
      }
    };

    document.addEventListener('focusin', handleFocus);

    return () => {
      document.removeEventListener('focusin', handleFocus);
    };
  }, [active]);
};
