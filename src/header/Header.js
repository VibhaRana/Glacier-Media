import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Grid, Toolbar } from "@material-ui/core";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import "./Header.css";

const useStyles = makeStyles((theme) => ({
  headerLogo: {
    width: "120px",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "20px",
    objectFit: "contain",
  },
  imageStyle : {
    flex : 1
  }
}));

function Header() {
  const classes = useStyles();
  return (
    <Grid container className="header">
      <Grid item>
        <AppBar style={{ backgroundColor: "black" }}>
          <Toolbar>
            <Grid className = {classes.imageStyle}>
          <img className="header__logo" src="/assets/logo.jpeg" />
          </Grid>
          <AddShoppingCartIcon />
          </Toolbar>
        </AppBar>
      </Grid>
    </Grid>
  );
}

export default Header;
