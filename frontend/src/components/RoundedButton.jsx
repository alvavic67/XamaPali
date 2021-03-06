import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
// import NavigationIcon from "@material-ui/icons/Navigation";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default function FloatingActionButtons(props) {
  const classes = useStyles();

  return <Fab variant="extended">{props.value}</Fab>;
}
