import { useEffect, useState } from "react";

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

function animationInterval(ms: number, signal: AbortSignal, callback: (time: number) => void) {
  const start = performance.now();

  function frame(time: number) {
    if (signal.aborted) return;
    callback(time);
    scheduleFrame(time);
  }

  function scheduleFrame(time: number) {
    const elapsed = time - start;
    const roundedElapsed = Math.round(elapsed / ms) * ms;
    const targetNext = start + roundedElapsed + ms;
    const delay = targetNext - performance.now();
    return setTimeout(() => requestAnimationFrame(frame), delay);
  }

  return scheduleFrame(start);
}

export default useTimer;
