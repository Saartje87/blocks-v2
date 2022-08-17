import { useEffect, useRef } from 'react';
import { getRootElement } from '../../utils/rootElement';

export const useLayer = () => {
  const layerRef = useRef<HTMLDivElement>();

  // Remove layer when unmounting
  useEffect(
    () => () => {
      if (layerRef.current) {
        getRootElement()?.removeChild(layerRef.current);
      }
    },
    [],
  );

  return () => {
    if (!layerRef.current) {
      layerRef.current = document.createElement('div');
      getRootElement().appendChild(layerRef.current);
    }

    return layerRef.current;
  };
};
