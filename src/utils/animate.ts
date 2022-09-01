interface Transform {
  property: 'opacity' | 'transform';
  from?: string;
  to?: string;
}

export interface Animate {
  element: HTMLElement;
  transforms: Transform[];
  duration?: number;
  timingFunction?: string;
  done?: () => void;
}

export const animate = ({
  element,
  transforms,
  duration = 200,
  timingFunction = 'ease',
  done,
}: Animate) => {
  element.style.transition = '';

  for (const { property, from = '' } of transforms) {
    element.style.setProperty(property, from);
  }

  const onTransitionEnd = () => {
    if (!element) {
      return;
    }

    element.removeEventListener('transitionend', onTransitionEnd);
    element.removeEventListener('transitioncancel', onTransitionEnd);

    element.style.transition = '';

    if (done) {
      done();
    }
  };

  element.addEventListener('transitionend', onTransitionEnd);
  element.addEventListener('transitioncancel', onTransitionEnd);

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      element.style.transition = `transform ${duration}ms ${timingFunction}, opacity ${duration}ms ${timingFunction}`;

      for (const { property, to = '' } of transforms) {
        element.style.setProperty(property, to);
      }
    });
  });
};
