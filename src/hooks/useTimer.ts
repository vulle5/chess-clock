import { useState, useEffect, useRef } from "react";
import { Timer as NodeTimer } from "timer-node";
import { animationInterval } from "../utils/time";

/**
 * Timer hook that ticks every 100ms
 */
const useTimer = ({ initialTime, onTimerEnd }: TimerProps): Timer => {
  const { current: timer } = useRef(new NodeTimer());
  const timerSubscription = useRef<NodeJS.Timeout | undefined>();
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    return () => {
      timer.clear()
    };
  }, []);

  const start = () => {
    const subscription = animationInterval(() => {
      const currentTime = initialTime - timer.ms();

      if (currentTime <= 0) {
        stop();
        setTime(0);
        onTimerEnd?.();
        return;
      }

      if (timer.isRunning()) {
        setTime(currentTime); 
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
    timer.clear()
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
  onTimerEnd?: () => void;
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
