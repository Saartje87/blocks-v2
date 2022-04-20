let _rootElement: HTMLElement | null = null;

export const setRootElement = (rootElement: HTMLElement) => {
  _rootElement = rootElement;
};

export const getRootElement = () => {
  return _rootElement || document.body;
};
