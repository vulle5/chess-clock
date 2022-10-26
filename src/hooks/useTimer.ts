import { useState, useEffect, useRef } from "react";
import { Timer } from "timer-node";
import { animationInterval } from "../utils/time";

/**
 * Timer hook that ticks every 100ms
 * @param initialTime the initial time in milliseconds
 * @returns current time and functions to control the timer
 */
const useTimer = (initialTime: number) => {
  const { current: timer } = useRef(new Timer());
  const timerSubscription = useRef<NodeJS.Timeout | undefined>();
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    return () => stop();
  }, []);

  const start = () => {
    const subscription = animationInterval(() => {
      if (timer.isRunning()) {
        setTime(initialTime - timer.ms()); 
      }
    }, 100);
    if (timerSubscription?.current) {
      timerSubscription.current = subscription;
    }
    timer.start()
  };

  const stop = () => {
    if (timerSubscription?.current) {
      clearTimeout(timerSubscription.current);
    }
    timer.stop()
  };

  return {
    time,
    stop,
    start,
    pause: () => timer.pause(),
    resume: () => timer.resume()
  };
};

export default useTimer;
