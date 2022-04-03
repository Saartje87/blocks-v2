type Args = null | undefined | boolean | string;

export const classnames = (...args: Args[]) =>
  args.filter((arg) => arg && typeof arg === 'string').join(' ');
