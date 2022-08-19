import { CSSProperties, FC, ReactElement, useRef } from 'react';
import { Box } from '../Box';
import * as styles from './Swipe.css';
import { SwipePanel } from './SwipePanel';
import { useSwipable } from './useSwipable';

type Props = {
  children: ReactElement<typeof SwipePanel>[];
  className?: string;
  style?: CSSProperties;
  index: number;
  onIndexChange: (index: number) => void;
};

// TODO Add keyboard navigation
// TODO Add accessibility / aria
// TODO Add prop for mobileonly?
export const Swipe: FC<Props> = ({ children, className, style, index, onIndexChange }) => {
  const swipeRef = useRef<HTMLDivElement>(null);
  const areaRef = useRef<HTMLDivElement>(null);

  useSwipable({ swipeRef, areaRef, index, onIndexChange });

  return (
    <Box ref={swipeRef} position="relative" overflow="hidden" className={className} style={style}>
      <Box
        ref={areaRef}
        display="flex"
        flexWrap="nowrap"
        height="full"
        className={styles.swipeArea}
      >
        {children}
      </Box>
    </Box>
  );
};
