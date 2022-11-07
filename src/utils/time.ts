export const millisecondsToDigital = (milliseconds: number) => {
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = Math.floor((milliseconds % 60000) / 1000);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

export const millisecondsToDigitalWithMilliseconds = (milliseconds: number) => {
  const seconds = Math.floor((milliseconds % 60000) / 1000);
  const ms = Math.floor((milliseconds % 1000) / 100);
  return `${seconds < 10 ? '0' : ''}${seconds}.${ms}`;
};

export function animationInterval(callback: (time: number) => void, ms: number) {
  const start = performance.now();

  function frame(time: number) {
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
