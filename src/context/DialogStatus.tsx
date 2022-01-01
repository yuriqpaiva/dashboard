import * as React from 'react';

import DialogStatusUpdate from '../components/DialogStatusUpdate';

export interface DialogStatusContextProps {
  statusUpdate: number;
  setStatusUpdate: (value: number) => void;
  showDialogStatusUpdate: () => React.ReactNode;
}

export const DialogStatusContext =
  React.createContext<DialogStatusContextProps>({
    statusUpdate: null,
    setStatusUpdate: () => null,
    showDialogStatusUpdate: () => null,
  });

interface DialogStatusDataProps {
  children: React.ReactNode;
}

const DialogStatusData: React.FC<DialogStatusDataProps> = ({ children }) => {
  const [statusUpdate, setStatusUpdate] = React.useState<number>(null);

  function showDialogStatusUpdate() {
    if (statusUpdate === 200) {
      return <DialogStatusUpdate />;
    } else if (statusUpdate === 500) {
      return <DialogStatusUpdate />;
    } else {
      return;
    }
  }

  return (
    <DialogStatusContext.Provider
      value={{ statusUpdate, setStatusUpdate, showDialogStatusUpdate }}
    >
      {children}
    </DialogStatusContext.Provider>
  );
};

export default DialogStatusData;
