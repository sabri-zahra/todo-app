'use client';
import { type ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
// import CloseIcon from '@/assets/icons/close.svg';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: `${theme.palette.background.paper} !important`,
  },
  '& .MuiBackdrop-root': {
    backdropFilter: 'blur(2px)',
  },
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  children?: ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label='close'
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon width='24px' height='24px' />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

type BaseModalProps = {
  children: ReactNode;
  action?: ReactNode;
  title: string;
};

export function BaseModal({ children, action, title }: BaseModalProps) {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <BootstrapDialog fullWidth maxWidth='sm' onClose={handleClose} open={true}>
      <BootstrapDialogTitle onClose={handleClose}>{title}</BootstrapDialogTitle>
      <DialogContent dividers>{children}</DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant='outlined'>
          cancel
        </Button>
        {action}
      </DialogActions>
    </BootstrapDialog>
  );
}