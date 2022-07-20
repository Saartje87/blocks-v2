const query = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
let previousFocus: Element | null = null;

export const getFirstFocusableElement = (container: HTMLElement): HTMLElement | null => {
  const focusable = container.querySelector<HTMLElement>(query);

  return focusable || null;
};

export const focusFirstElement = (container: HTMLElement): void => {
  storeActiveElement();

  const focusable = getFirstFocusableElement(container);

  if (focusable) {
    focusable.focus();
  }
};

export const storeActiveElement = () => {
  previousFocus = document.activeElement;
};

export const restoreFocus = () => {
  if (previousFocus instanceof HTMLElement) {
    previousFocus.focus();
  }
};
