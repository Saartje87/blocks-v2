import { useLayoutEffect } from 'react';

export const usePreventBodyScroll = (enabled = true) => {
  useLayoutEffect(() => {
    const prevValue = document.body.style.getPropertyValue('overflow');

    if (enabled) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = prevValue;
    };
  }, [enabled]);
};
