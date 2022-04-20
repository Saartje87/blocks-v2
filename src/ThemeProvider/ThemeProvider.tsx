import { ReactNode, useLayoutEffect } from 'react';
import { getRootElement } from '../utils/rootElement';
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

  useLayoutEffect(() => {
    getRootElement().classList.add(theme);

    return () => {
      getRootElement().classList.remove(theme);
    };
  }, [theme]);

  return children;
};
