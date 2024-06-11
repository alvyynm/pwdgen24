import { useRef, useEffect } from "react";

const useIsInitialMount = () => {
  const isInitialMount = useRef(true);

  useEffect(() => {
    isInitialMount.current = false;
  }, []);

  return isInitialMount.current;
};

export default useIsInitialMount;
