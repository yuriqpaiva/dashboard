import * as React from 'react';

import { counterInSecondsInterval } from '../../data/counter';

interface CounterProps {
  updateChamadas: () => void;
}

const Counter: React.FC<CounterProps> = ({ updateChamadas }) => {
  const [counterNumber, setCounterNumber] = React.useState(
    counterInSecondsInterval
  );

  const resetCounter = React.useCallback(() => {
    setCounterNumber(counterInSecondsInterval);
  }, []);

  const updateCounter = React.useCallback(() => {
    if (counterNumber >= 0) {
      setCounterNumber(counterNumber - 1);
    }
  }, [counterNumber, setCounterNumber]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      updateCounter();
      if (counterNumber === 1) {
        updateChamadas();
        resetCounter();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [counterNumber, resetCounter, updateChamadas, updateCounter]);

  return (
    <div className="counter">
      <p className="counterText">
        Atualizando dados em <strong>{counterNumber}</strong> segundos
      </p>
    </div>
  );
};

export default Counter;
