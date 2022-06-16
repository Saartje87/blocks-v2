import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { breakpoints, themeContract } from '../theme.css';

export const responsiveConfig = {
  conditions: {
    mobile: {},
    tablet: {
      '@media': `screen and (min-width: ${breakpoints.tablet}px)`,
    },
    desktop: {
      '@media': `screen and (min-width: ${breakpoints.desktop}px)`,
    },
    wide: {
      '@media': `screen and (min-width: ${breakpoints.wide}px)`,
    },
  },
  defaultCondition: 'mobile',
  responsiveArray: ['mobile', 'tablet', 'desktop', 'wide'],
} as const;

// Exported so storybook stories can access style options
export const responsiveProperties = defineProperties({
  ...responsiveConfig,
  properties: {
    display: [
      'none',
      'flex',
      'inline-flex',
      'block',
      'inline',
      'inline-block',
      'grid',
      'inline-grid',
    ],
    flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
    justifyContent: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
    flexWrap: ['nowrap', 'wrap'],
    alignItems: ['stretch', 'center', 'flex-start', 'flex-end'],
    paddingTop: themeContract.space,
    paddingBottom: themeContract.space,
    paddingLeft: themeContract.space,
    paddingRight: themeContract.space,
    marginTop: themeContract.space,
    marginBottom: themeContract.space,
    marginRight: themeContract.space,
    marginLeft: themeContract.space,
    flexGrow: [0, 1],
    flexShrink: [0, 1],
    fontSize: themeContract.fontSize,
    border: themeContract.border.styles,
    gap: themeContract.space,
    rowGap: themeContract.space,
    columnGap: themeContract.space,
    outline: ['none'],
    textAlign: ['center', 'left', 'right', 'justify'],
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    placeItems: ['justifyContent', 'alignItems'],
  },
});

const unresponsiveProperties = defineProperties({
  properties: {
    color: themeContract.color,
    backgroundColor: themeContract.color,
    fontWeight: themeContract.weight,
    fontFamily: themeContract.fontFamily,
    fontStyle: ['normal', 'italic', 'oblique'],
    textDecoration: ['overline', 'line-through', 'underline', 'none'],
    position: ['relative', 'fixed', 'absolute', 'sticky'],
    overflow: ['hidden', 'scroll', 'visible', 'auto'],
    overflowX: ['hidden', 'scroll', 'visible', 'auto'],
    overflowY: ['hidden', 'scroll', 'visible', 'auto'],
    boxShadow: themeContract.shadow,
    borderRadius: themeContract.border.radius,
    width: { auto: 'auto', full: '100%' },
    height: { auto: 'auto', full: '100%' },
    cursor: ['auto', 'pointer'],
    wordBreak: ['break-word'],
    userSelect: ['none'],
    opacity: [0, 1],
    pointerEvents: ['none'],
    top: [0],
    bottom: [0],
    left: [0],
    right: [0],
  },
  shorthands: {
    inset: ['top', 'bottom', 'left', 'right'],
  },
});

// Export all styles so we can use these in some storybook stories
export const atomicStyles = { ...responsiveProperties.styles, ...unresponsiveProperties.styles };

export const atoms = createSprinkles(responsiveProperties, unresponsiveProperties);

export type Atoms = Parameters<typeof atoms>[0];
export type ResponsiveSpace = keyof typeof themeContract.space;
