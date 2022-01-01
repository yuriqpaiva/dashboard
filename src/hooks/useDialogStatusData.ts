import { useContext } from 'react';

import {
  DialogStatusContext,
  DialogStatusContextProps,
} from './../context/DialogStatus';

export const useDialogStatusData = (): DialogStatusContextProps =>
  useContext(DialogStatusContext);
