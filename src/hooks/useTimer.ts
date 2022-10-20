import { useEffect, useState } from "react";

import { animationInterval } from "../utils/time";

const controller = new AbortController();

const useTimer = (initialTime: number) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const subscription = animationInterval(1000, controller.signal, () => {
      setTime((prevTime) => prevTime - 1000);
    });

    return () => clearTimeout(subscription);
  }, [])

  return { time, stop: () => controller.abort() };
}

export default useTimer;
