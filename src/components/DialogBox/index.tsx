import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

import { useStylesBlock } from '../../pages/SignIn';

interface DialogBoxProps {
  title: string;
  children: React.ReactNode;
  classes?: ReturnType<typeof useStylesBlock>;
  visible?: boolean;
  onClose: () => void;
}

export const DialogBox: React.FC<DialogBoxProps> = ({
  title,
  children,
  visible = false,
  classes,
  onClose,
}): React.ReactElement => {
  return (
    <Dialog open={visible} onClose={onClose}>
      <DialogTitle id="form-dialog-title">
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
        {title}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};
