import { useState } from 'react';

export const useMutatable = <T extends Record<string, unknown>>(initialValue: T) => {
  return useState(() => initialValue)[0];
};
