import { HTMLProps } from 'react';
import { Atoms } from '../css/sprinkles/sprinkles.css';

export type OmitHTMLProps<E extends Element> = Omit<HTMLProps<E>, keyof Atoms | 'as'>;

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
