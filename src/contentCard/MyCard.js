import React from "react";
import "./MyCard.css";

import {
  Card,
  Grid,
  CardContent,
  CardActions,
  CardHeader,
  CardMedia,
  Divider,
  Button,
  Link,
  CardActionArea,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ButtonFile from "../ButtonFile";
import styled, { ThemeProvider } from "styled-components";
import NoSsr from "@material-ui/core/NoSsr";
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[50],
    },
    secondary: {
      main: grey[200],
    },
  },
});

// const StyledCard = styled(Card)`
//   ${({ theme }) => `
//   cursor: pointer;
//   background-color: ${theme.palette.primary.main};
//   transition: ${theme.transitions.create(["background-color", "transform"], {
//     duration: theme.transitions.duration.standard,
//   })};
//   &:hover {
//     background-color: ${theme.palette.secondary.main};
//     transform: scale(1);
//     background-image: null;
  
//   }
//   `}
// `;

function MyCard(props) {
  const { title, description, image, price, rating } = props;

  return (
    <div id="wrapper">
      <NoSsr>
        <ThemeProvider theme={theme}>
          <Card>
            <CardHeader title={title} />
            <CardMedia style={{ height: "250px" }} image={image} />

            <CardContent>
              <div>
                <a className="hide" href="#">
                  Add to Cart
                </a>
              </div>

              {description}

              <Divider />
              <Grid item style={{ flex: 1 }}>
                Price - {price}
              </Grid>

              {rating}
            </CardContent>
          </Card>
        </ThemeProvider>
      </NoSsr>
    </div>
  );
}

export default MyCard;
