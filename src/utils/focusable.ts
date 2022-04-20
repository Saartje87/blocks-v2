const query = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export const getFirstFocusableElement = (container: HTMLElement): HTMLElement | null => {
  const focusable = container.querySelector<HTMLElement>(query);

  return focusable || null;
};

export const focusFirstElement = (container: HTMLElement): void => {
  const focusable = getFirstFocusableElement(container);

  if (focusable) {
    focusable.focus();
  }
};
