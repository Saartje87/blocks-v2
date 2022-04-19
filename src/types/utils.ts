import { HTMLProps } from 'react';
import { Atoms } from '../sprinkles/sprinkles.css';

export type OmitHTMLProps<E extends Element> = Omit<HTMLProps<E>, keyof Atoms | 'as'>;
