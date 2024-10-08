import { useCallback, useState, useEffect, useRef } from "react";

export default function useService(service, { autoStart = true, params, onData, onError }) {
  const [isFetching, setIsFetching] = useState(autoStart);
  const isMounted = useRef(true);

  const start = useCallback(
    async (params) => {
      try {
        setIsFetching(true);
        const result = await service(params);
        onData(result);
      } catch (error) {
        if (onError) {
          onError(error);
        }
      } finally {
        setIsFetching(false);
      }
    },
    [service, params, isMounted]
  );

  useEffect(() => {
    if (autoStart) {
      start(params);
    }

    return () => {
      isMounted.current = false;
    };
  }, []);

  return [isFetching, start];
}
