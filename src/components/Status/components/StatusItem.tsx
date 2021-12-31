import * as React from 'react';

interface StatusItemProps {
  counter: number;
  children: React.ReactNode;
  classColor: string;
}

const StatusItem: React.FC<StatusItemProps> = ({
  counter,
  children,
  classColor,
}) => {
  return (
    <div className="statusItem">
      <span className={`statusNumber ${classColor}`}>{counter}</span>
      <p className={classColor}>{children}</p>
    </div>
  );
};

export default StatusItem;
