import { ReactNode } from 'react';
// import { vars } from '../theme';

// interface Theme {
//   space: {
//     small: string;
//     medium: string;
//     large: string;
//   };
// }

export interface BlocksThemeProviderProps {
  children: ReactNode;
  theme: string;
}

export const BlocksThemeProvider = ({ children, theme }: BlocksThemeProviderProps) => {
  // console.log('themeT', theme);
  // useLayoutEffect(() => {
  //   if (theme) {
  //     const root = document.body;
  //     setElementVars(root, {
  //       [vars.space.small]: theme.space.small,
  //       [vars.space.medium]: theme.space.medium,
  //       [vars.space.large]: theme.space.large,
  //     });
  //   }
  // }, [theme]);

  // useLayoutEffect(() => {
  //   document.documentElement.classList.add(theme);
  // }, [theme]);

  return <div className={theme}>{children}</div>;
};
