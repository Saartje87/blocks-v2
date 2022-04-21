import { keyframes, style } from '@vanilla-extract/css';

export const backdropEnterAnimation = keyframes({
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
});

export const backdropLeaveAnimation = keyframes({
  '0%': {
    opacity: 1,
  },
  '100%': {
    opacity: 0,
  },
});

export const dialogEnterAnimation = keyframes({
  '0%': {
    top: '-34px',
  },
  '100%': {
    top: 0,
  },
});

export const dialogLeaveAnimation = keyframes({
  '0%': {
    top: 0,
  },
  '100%': {
    top: '-34px',
  },
});

export const backdrop = style({
  contain: 'layout',
  position: 'fixed',
  width: '100%',
  height: '100%',
  left: 0,
  top: 0,
  overflow: 'hidden',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  opacity: '0',
  animationName: backdropEnterAnimation,
  animationDuration: '200ms',
  animationFillMode: 'both',
});

export const backdropLeave = style({
  animationName: backdropLeaveAnimation,
});

export const dialog = style({
  display: 'block',
  position: 'relative',
  backgroundColor: '#fff',
  animationName: dialogEnterAnimation,
  animationDuration: '200ms',
  animationFillMode: 'both',
  margin: 0,
  maxHeight: '94%',
  maxWidth: '94%',
});

export const dialogLeave = style({
  animationName: dialogLeaveAnimation,
});
