const counterInSecondsInterval = 60;

const setCounterToMS = (counterInSeconds: number): number => {
  return counterInSeconds * 1000;
};

export { counterInSecondsInterval, setCounterToMS };
