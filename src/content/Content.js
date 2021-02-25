import React from 'react'
import { Grid } from '@material-ui/core';
import MyCard from '../contentCard/MyCard';
import glacierMediaList from '../data'

function Content() {
    const getGlacierMediaCard = glacierMediaObj => {
        return (
          <Grid item xs={12} sm={6} lg = {4} xl = {4} >
            <MyCard {...glacierMediaObj} />
          </Grid>
        );
      };
    return (
        <Grid container spacing = {2}>
           
      {glacierMediaList.map(glacierMediaObj => getGlacierMediaCard(glacierMediaObj))}
  
            
        </Grid>
    )
}

export default Content
