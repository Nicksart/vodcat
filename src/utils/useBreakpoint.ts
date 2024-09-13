import { useEffect, useState } from "react";
import { screens } from "../../tailwind.config";

export const useBreakpoint = (breakpoint: keyof typeof screens): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const checkBreakpoint = () => {
      if (window.matchMedia(`(min-width: ${screens[breakpoint]})`).matches) {
        setMatches(true);
      } else {
        setMatches(false);
      }
    };

    checkBreakpoint();

    window.addEventListener("resize", checkBreakpoint);
    return () => window.removeEventListener("resize", checkBreakpoint);
  }, [breakpoint]);

  return matches;
};
