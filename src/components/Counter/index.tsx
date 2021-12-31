import * as React from 'react';

interface CounterProps {
  counterNumber: number;
  setCounterNumber: (counterNumber: number) => void;
}

const Counter: React.FC<CounterProps> = ({
  counterNumber,
  setCounterNumber,
}) => {
  const updateCounter = React.useCallback(() => {
    if (counterNumber >= 0) {
      setCounterNumber(counterNumber - 1);
    }
  }, [counterNumber, setCounterNumber]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      updateCounter();
    }, 1000);
    return () => clearInterval(interval);
  }, [updateCounter]);

  return (
    <div>
      <p>
        Atualizando dados em <strong>{counterNumber}</strong> segundos
      </p>
    </div>
  );
};

export default Counter;
