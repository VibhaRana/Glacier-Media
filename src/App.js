
import './App.css';
import { React } from 'react';
import Header from './header/Header';
import Dashboard from './dashboard/Dashboard';
import { Grid, Typography } from '@material-ui/core';
import Content from './content/Content';
import ButtonFile from './ButtonFile'

function App() {
  return (
    <Grid container>
      <Grid item>
        <Header />
        </Grid>
        <Grid item xs = {12} sm = {12} lg = {12} xl = {12}>
        <Dashboard />
      </Grid>
      
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
        <Content />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
}

export default App;
