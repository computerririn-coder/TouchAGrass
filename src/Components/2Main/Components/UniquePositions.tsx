import { useRef } from 'react';

export function useUniquePositions(count: number) {
  const ref = useRef<{ top: number; left: number }[]>([]);

  if (ref.current.length === 0) {
    const used: { top: number; left: number }[] = [];

    function getRandomPercent() {
      let top = 0;
      let left = 0;
      let unique = false;

      while (!unique) {
        top = Math.random() * 90;
        left = Math.random() * 90;
        unique = !used.some(pos =>
          Math.abs(pos.top - top) < 4 &&
          Math.abs(pos.left - left) < 4
        );
      }

      const pos = { top, left };
      used.push(pos);
      return pos;
    }

    for (let i = 0; i < count; i++) ref.current.push(getRandomPercent());
  }

  return ref.current;
}
