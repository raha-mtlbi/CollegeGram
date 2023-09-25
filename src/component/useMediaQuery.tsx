import { useEffect, useState } from "react";

interface ItwBreakpoints {
  [key: string]: string;
}

// This is straight from default tailwind config.
// Would have loved to use resolveConfig but
// you try to get it to work with ts.
const twBreakpoints: ItwBreakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

// Uses tailwinds breakpoints to consume media queries.
const useMediaQuery = (twBreakpoint: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const query = `(max-width: ${twBreakpoint})`;

    console.log("query is:", query);
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => {
      setMatches(media.matches);
    };
    window.addEventListener("resize", listener);
    return () => {
      console.log("RETURNING");
      window.removeEventListener("resize", listener);
    };
  }, [matches, twBreakpoint]);

  return matches;
};

export default useMediaQuery;
