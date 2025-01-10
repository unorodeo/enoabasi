import { useCallback, useState } from "react";

import { useIsomorphicLayoutEffect } from "./use-isomorphic-layout-effect";

export default function useScroll(threshold: number) {
  const [scrolled, setScrolled] = useState(false);

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > threshold);
  }, [threshold]);

  useIsomorphicLayoutEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  // also check on first load
  useIsomorphicLayoutEffect(() => {
    onScroll();
  }, [onScroll]);

  return scrolled;
}
