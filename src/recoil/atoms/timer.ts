import { atom, selector } from "recoil";

export const timersState = atom<[number, number]>({
  key: 'timersState',
  default: [180000, 180000],
});

export const timersAsDigital = selector<[string, string]>({
  key: 'timersAsDigital',
  get: ({ get }) => {
    const timers: [number, number] = get(timersState);
    return timers.map((timer) => {
      const minutes = Math.floor(timer / 60000);
      const seconds = Math.round((timer % 60000) / 1000);
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }) as [string, string];
  }
});
