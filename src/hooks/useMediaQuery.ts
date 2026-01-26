import { useEffect, useState } from "react";

const getMatches = (query: string) => {
  if (typeof window === "undefined") {
    return false;
  }

  return window.matchMedia(query).matches;
};

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(getMatches(query));

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQueryList = window.matchMedia(query);
    const handleChange = () => {
      setMatches(mediaQueryList.matches);
    };

    handleChange();

    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener("change", handleChange);
    } else {
      mediaQueryList.addListener(handleChange);
    }

    return () => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener("change", handleChange);
      } else {
        mediaQueryList.removeListener(handleChange);
      }
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
