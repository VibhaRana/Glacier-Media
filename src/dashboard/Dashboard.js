import React from "react";
import { Grid} from "@material-ui/core";
import "./Dashboard.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  control: {
    padding: theme.spacing(2),
  },
}));

function Dashboard() {
  const classes = useStyles();
  return (
    <Grid container xs={12}>
      <Grid item xs={12} sm={12} lg={12}>
        <img className="home__image" src="/assets/glacierMediaHeader.jpg" />
      </Grid>
    </Grid>
  );
}

export default Dashboard;
