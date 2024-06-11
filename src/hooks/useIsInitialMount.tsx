import { useRef, useEffect } from "react";

// check if the current render is the first one
const useIsInitialMount = () => {
  const isInitialMount = useRef(true);

  // useEffect sets this ref to false after the first render.
  useEffect(() => {
    isInitialMount.current = false;
  }, []);

  return isInitialMount.current;
};

export default useIsInitialMount;
