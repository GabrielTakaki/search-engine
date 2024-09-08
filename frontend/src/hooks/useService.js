import { useCallback, useState, useEffect, useRef } from "react";

export default function useService(service, { autoStart = false, params = {}, onData, onError }) {
  const [isFetching, setIsFetching] = useState(!!autoStart);
  const isMounted = useRef(true);

  const start = useCallback(async () => {
    try {
      setIsFetching(true);
      const result = await service(params);
      if (isMounted.current) {
        onData(result);
      }
    } catch (error) {
      if (isMounted.current && onError) {
        onError(error);
      }
    } finally {
      if (isMounted.current) {
        setIsFetching(false);
      }
    }
  }, [service, onData, onError, params]);

  useEffect(() => {
    if (autoStart) {
      start();
    }

    return () => {
      isMounted.current = false;
    };
  }, [autoStart, start]);

  return [isFetching, start];
}
