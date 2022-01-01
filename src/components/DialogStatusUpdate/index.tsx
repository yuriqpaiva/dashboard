import React, { ReactNode } from 'react';

import { useDialogStatusData } from '../../hooks/useDialogStatusData';
import Dialog from '../../styles/dialog';
import { cancelIcon } from '../icons';

interface DialogStatusUpdateProps {
  children: ReactNode;
  status: number;
}

const DialogStatusUpdate: React.FC<DialogStatusUpdateProps> = ({
  children,
  status,
}) => {
  const dialogColor = status === 200 ? 'greenDialog' : 'redDialog';
  const { setStatusUpdate } = useDialogStatusData();

  return (
    <Dialog>
      <div className={`dialogStatusUpdate ${dialogColor}`}>{children}</div>
      <span className="close" onClick={() => setStatusUpdate(null)}>
        {cancelIcon}
      </span>
    </Dialog>
  );
};

export default DialogStatusUpdate;
