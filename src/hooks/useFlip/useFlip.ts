import { useCallback, useLayoutEffect, useRef } from 'react';
import { Animate, animate } from '../../utils/animate';

const createScheduler = () => {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return (callback: () => void) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(callback, 10);
  };
};

const schedule = createScheduler();

interface Position {
  x: number;
  y: number;
}

function getScrollPosition(element: HTMLElement): Position {
  let node: HTMLElement | null = element;
  let x = 0;
  let y = 0;

  while ((node = node.parentElement)) {
    x += node.scrollLeft;
    y += node.scrollTop;
  }

  return { x, y };
}

function getPosition(element: HTMLElement): Position {
  const rect = element.getBoundingClientRect();
  const scroll = getScrollPosition(element);

  return {
    x: rect.x + scroll.x,
    y: rect.y + scroll.y,
  };
}

function updatePosition(refs: Map<string, HTMLElement>, positions: Map<string, Position>) {
  Array.from(refs.entries()).forEach(([id, element]) => {
    positions.set(id, getPosition(element));
  });
}

function getTransformValue(axis: 'x' | 'y' | 'both', x: number, y: number) {
  switch (axis) {
    case 'x':
      return `translateX(${x}px)`;
    case 'y':
      return `translateY(${y}px)`;
    case 'both':
      return `translate(${x}px, ${y}px)`;
  }
}

function useRefValue<T>(initialValue: T): T {
  const ref = useRef<T>();

  if (!ref.current) {
    ref.current = initialValue;
  }

  return ref.current;
}

interface FlipOptions {
  axis?: 'x' | 'y' | 'both';
}

export const useFlip = ({ axis = 'both' }: FlipOptions = {}) => {
  const refs = useRefValue(new Map<string, HTMLElement>());
  const positions = useRefValue(new Map<string, Position>());
  const onTransitionEnd = useCallback(() => {
    schedule(() => updatePosition(refs, positions));
  }, []);

  useLayoutEffect(() => {
    const animations: Animate[] = [];

    Array.from(refs.entries()).forEach(([id, element]) => {
      if (!element.isConnected) {
        element.removeEventListener('transitionend', onTransitionEnd);
        refs.delete(id);
        positions.delete(id);
        return;
      }

      const prevPosition = positions.get(id);
      const position = getPosition(element);

      // Enter animation
      if (!prevPosition) {
        // Update positions again after transition finishes
        element.addEventListener('transitionend', onTransitionEnd);

        animations.push({
          element,
          transforms: [
            { property: 'transform', from: 'scale(0.8)' },
            { property: 'opacity', from: '0' },
          ],
        });
      }

      // Move animation
      if (prevPosition && (prevPosition.x !== position.x || prevPosition.y !== position.y)) {
        const x = prevPosition.x - position.x;
        const y = prevPosition.y - position.y;

        animations.push({
          element,
          transforms: [{ property: 'transform', from: getTransformValue(axis, x, y) }],
        });
      }

      positions.set(id, position);
    });

    animations.forEach(animate);
  });

  const setRef = useCallback(
    (id: string) => (ref: HTMLElement | null) => {
      if (ref) {
        refs.set(id, ref);
      }
    },
    [],
  );

  const remove = useCallback((id: string, callback: () => void) => {
    const element = refs.get(id);

    if (element) {
      animate({
        element,
        done: callback,
        duration: 100,
        transforms: [
          {
            property: 'opacity',
            from: '1',
            to: '0',
          },
          {
            property: 'transform',
            to: 'scale(0.8)',
          },
        ],
      });
    }
  }, []);

  return { setRef, remove };
};
