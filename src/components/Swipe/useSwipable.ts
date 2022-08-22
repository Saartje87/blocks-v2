import { RefObject, useEffect } from 'react';
import { useMutatable } from '../../hooks/useMutatable/useMutatable';

// https://easings.net/#easeInOutSine
function easeInOutSine(x: number): number {
  return -(Math.cos(Math.PI * x) - 1) / 2;
}

type AllEvents = TouchEvent | MouseEvent;
type Position = {
  x: number;
  y: number;
};

function isTouchEvent(event: AllEvents): event is TouchEvent {
  return 'touches' in event;
}

function isMultiTouch(event: AllEvents): boolean {
  return isTouchEvent(event) ? event.touches.length > 1 : false;
}

function getEventCoords(event: AllEvents): Position {
  if (isTouchEvent(event)) {
    return {
      x: event.touches[0].clientX,
      y: event.touches[0].clientY,
    };
  }

  return {
    x: event.clientX,
    y: event.clientY,
  };
}

type CreateSwipeEventHandlerProps = {
  index: number;
  swipeRef: RefObject<HTMLDivElement>;
  areaRef: RefObject<HTMLDivElement>;
  onIndexChange: (index: number) => void;
};

// TODO Change to hook so we can remove event listeners on unmount
export const useSwipable = ({
  swipeRef,
  areaRef,
  onIndexChange,
  index,
}: CreateSwipeEventHandlerProps) => {
  const SCROLL_THRESHOLD = 16;
  const SWIPE_THRESHOLD = 6;
  const state = useMutatable({
    swipeWidth: 0,
    isActive: false,
    childrenCount: 0,
    index,
    progress: 0,
    didSwipe: false,
  });
  const positions = useMutatable({
    start: { x: 0, y: 0 },
    current: { x: 0, y: 0 },
  });

  function updatePosition() {
    if (!state.isActive || !areaRef.current) {
      return;
    }

    let progress = state.progress;

    if (state.index === 0 && progress > 0) {
      progress = easeInOutSine(progress) * 0.15;
    } else if (state.index === state.childrenCount - 1 && progress < 0) {
      progress = easeInOutSine(progress) * -0.15;
    }

    areaRef.current.style.transition = 'none';
    areaRef.current.style.transform = `translateX(${(progress - state.index) * 100}%)`;

    requestAnimationFrame(updatePosition);
  }

  function setProgress(progress: number) {
    state.progress = progress;
  }

  function removeListeners(all = false) {
    document.removeEventListener('mousemove', onMove);
    document.removeEventListener('mouseup', onEnd);
    document.removeEventListener('touchmove', onMove);
    document.removeEventListener('touchend', onEnd);
    document.removeEventListener('touchcancel', onEnd);

    if (all && swipeRef.current) {
      swipeRef.current.addEventListener('touchstart', onStart);
      swipeRef.current.addEventListener('mousedown', onStart);
      swipeRef.current.removeEventListener('click', onClick, { capture: true });
    }
  }

  function addListeners() {
    if (swipeRef.current) {
      swipeRef.current.addEventListener('touchstart', onStart);
      swipeRef.current.addEventListener('mousedown', onStart);
      swipeRef.current.addEventListener('click', onClick, { capture: true });
    }
  }

  function onStart(event: AllEvents) {
    if (event.defaultPrevented) {
      return;
    }

    if (isMultiTouch(event)) {
      return;
    }

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onEnd);
    document.addEventListener('touchmove', onMove);
    document.addEventListener('touchend', onEnd);
    document.addEventListener('touchcancel', onEnd);

    state.isActive = false;
    state.didSwipe = false;
    state.swipeWidth = swipeRef.current?.clientWidth || 0;
    state.childrenCount = areaRef.current?.children.length || 0;

    positions.current = positions.start = getEventCoords(event);
  }

  function onMove(event: TouchEvent | MouseEvent) {
    const { x, y } = getEventCoords(event);
    const deltaX = x - positions.start.x;
    const deltaY = y - positions.start.y;

    if (isMultiTouch(event)) {
      return;
    }

    if (!state.isActive) {
      // Bail out, user is scrolling on Y axis
      if (Math.abs(deltaY) > SCROLL_THRESHOLD) {
        removeListeners();
        return;
      }

      // Wait a bit to be sure this is meant as a swipe event
      if (Math.abs(deltaX) < SWIPE_THRESHOLD) {
        return;
      }

      state.isActive = true;
      state.didSwipe = true;

      requestAnimationFrame(updatePosition);
    }

    // Prevent scroll
    event.preventDefault();

    positions.current = { x, y };

    setProgress(deltaX / state.swipeWidth);
  }

  function onEnd(event: AllEvents) {
    if (state.isActive) {
      event.preventDefault();
      event.stopPropagation();
    }

    state.isActive = false;

    removeListeners();

    if (areaRef.current) {
      const progress = (positions.current.x - positions.start.x) / state.swipeWidth;
      const nextIndex = Math.max(
        0,
        Math.min(state.childrenCount - 1, state.index + (progress < 0 ? 1 : -1)),
      );

      areaRef.current.style.transition = '';
      areaRef.current.style.transform = `translateX(${nextIndex * -100}%)`;

      onIndexChange(nextIndex);
    }
  }

  // Prevent click when user used swipe
  function onClick(event: MouseEvent) {
    if (state.didSwipe) {
      event.stopPropagation();
    }
  }

  useEffect(() => {
    addListeners();

    return () => {
      removeListeners(true);
    };
  }, []);

  useEffect(() => {
    state.index = index;
  }, [index]);
};
