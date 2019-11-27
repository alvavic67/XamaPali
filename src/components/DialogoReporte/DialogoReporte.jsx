import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function DialogProfessor(props) {
  const [role, setRole] = React.useState('');
  const handleRole = event => {
    setRole(event.target.value);
  };
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog
        open={open} onClose={handleClose} 
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Generar Reporte</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Selecciona uno de los siguientes reportes semanales
            </DialogContentText>
          <TextField
            id="filled-select-currency"
            select
            label="Buscar Reporte Semanal"
            margin="normal"
            fullWidth
            variant="filled"
            value={role}
            onChange={handleRole}>
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}  color="primary">
            Cancelar
            </Button>
          <Button onClick={handleClose} >
            Aceptar
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
