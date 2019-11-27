import React from "react";

import Map from "../components/Map";
//import Button from "../components/Button";
import List from "../components/List";


import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    display: "center",
    justifyContent: "center",
  },
  rightDiv: {
    alignItems: "right",
    aligh: "right",
    margin: theme.spacing(2, 0, 2),
    paddingLeft: "150px",
  },
  leftDiv: {
    paddingLeft: "25px",
    borderRadius: "10px",
    paddingTop: "25px"
  }
}));

export default function Main() {
  const classes = useStyles();
  return ( 
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item lg={6} className={classes.leftDiv}>
            <Map className="item-map" />
          </Grid>
          <Grid item lg={6} className={classes.rightDiv}>
            <Button>Generar Reporte</Button>
            <Button>Cerrar Sesion</Button>
            <List title="Usuarios" className="item-lista" />
          </Grid>
        </Grid>
      </Container>
    </div >
  );
};