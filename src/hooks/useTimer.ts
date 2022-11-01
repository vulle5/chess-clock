import { useState, useEffect, useRef } from "react";
import { Timer as NodeTimer } from "timer-node";
import { animationInterval } from "../utils/time";

/**
 * Timer hook that ticks every 100ms
 * @param initialTime the initial time in milliseconds
 * @returns current time and functions to control the timer
 */
const useTimer = ({ initialTime }: TimerProps): Timer => {
  const { current: timer } = useRef(new NodeTimer());
  const timerSubscription = useRef<NodeJS.Timeout | undefined>();
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    return () => stop();
  }, []);

  const start = () => {
    const subscription = animationInterval(() => {
      const currentTime = timer.ms();

      if (timer.isRunning()) {
        setTime(initialTime - currentTime); 
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
    isRunning: () => timer.isRunning(),
    isPaused: () => timer.isPaused(),
    isStarted: () => timer.isStarted(),
    isStopped: () => timer.isStopped(),
    stop,
    start,
    pause: () => timer.pause(),
    resume: () => timer.resume()
  };
};

export interface TimerProps {
  initialTime: number;
}

export interface Timer {
  time: number;
  start: () => void;
  stop: () => void;
  pause: () => NodeTimer;
  resume: () => NodeTimer;
  isRunning: () => boolean;
  isPaused: () => boolean;
  isStarted: () => boolean;
  isStopped: () => boolean;
}

export default useTimer;
