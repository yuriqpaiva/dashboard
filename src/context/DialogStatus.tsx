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

  let clearTimeout: boolean;

  function showDialogStatusUpdate() {
    if (!clearTimeout) {
      clearTimeout = true;
      setTimeout(() => {
        setStatusUpdate(null);
        clearTimeout = false;
      }, 5000);
    }

    if (statusUpdate === 200) {
      return (
        <DialogStatusUpdate status={200}>
          Operação concluída com sucesso
        </DialogStatusUpdate>
      );
    } else if (statusUpdate === 500) {
      return (
        <DialogStatusUpdate status={500}>
          Ocorreu uma falha ao executar esta operação
        </DialogStatusUpdate>
      );
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
