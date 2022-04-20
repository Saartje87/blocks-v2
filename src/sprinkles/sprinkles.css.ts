import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { breakpoints, vars } from '../theme.css';

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
    paddingTop: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    marginTop: vars.space,
    marginBottom: vars.space,
    marginRight: vars.space,
    marginLeft: vars.space,
    flexGrow: [0, 1],
    flexShrink: [0, 1],
    fontSize: vars.fontSize,
    // lineHeight: vars.lineHeight,
    // border: vars.border.styles,
    gap: vars.space,
    rowGap: vars.space,
    columnGap: vars.space,
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
    color: vars.color,
    backgroundColor: vars.color,
    fontWeight: vars.weight,
    fontFamily: vars.fontFamily,
    fontStyle: ['normal', 'italic', 'oblique'],
    textDecoration: ['overline', 'line-through', 'underline', 'none'],
    position: ['relative', 'fixed', 'absolute', 'sticky'],
    overflow: ['hidden', 'scroll', 'visible', 'auto'],
    // boxShadow: vars.shadows,
    // borderRadius: vars.border.radius,
    width: { full: '100%' },
    height: { full: '100%' },
    cursor: ['auto', 'pointer'],
    wordBreak: ['break-word'],
    userSelect: ['none'],
    opacity: [0, 1],
    zIndex: { modal: 100 },
    pointerEvents: ['none'],
  },
});

// Export all styles so we can use these in some storybook stories
export const atomicStyles = { ...responsiveProperties.styles, ...unresponsiveProperties.styles };

export const atoms = createSprinkles(responsiveProperties, unresponsiveProperties);

export type Atoms = Parameters<typeof atoms>[0];
export type ResponsiveSpace = keyof typeof vars.space;
