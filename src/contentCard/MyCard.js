import React from "react";
import './MyCard.css'

import {
  Card,
  Grid,
  CardContent,
  Typography,
  CardActionArea,
  CardActions,
  CardHeader,
  CardMedia,
  Divider,

} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ButtonFile from '../ButtonFile';

const useStyles = makeStyles({
  root: {},
  
  title: {
    fontSize: 14,
  },
  
});

function MyCard(props) {
  const classes = useStyles();
 
  const { title, description, image, price, rating } = props;

  return (
    <div className = 'container'>
    <Card >
  
      <CardHeader title={title} />
      <CardMedia
        style={{ height: "250px" }}
        className={classes.media}
        image={image}
      />
      <CardContent>{description} <Divider />Price - {price} 
     {rating}
       </CardContent>
       <CardActions>
       <ButtonFile />
       </CardActions>
      
    </Card>
    
    </div>
  );
}

export default MyCard;
