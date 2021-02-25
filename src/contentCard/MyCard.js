import React from "react";
import "./MyCard.css";

import {
  Card,
  Grid,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Button,
} from "@material-ui/core";

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

const StyledCard = styled(Card)`
  ${({ theme }) => `
  cursor: pointer;
   background-color: ${theme.palette.primary.main};
   transition: ${theme.transitions.create(["background-color", "transform"], {
     duration: theme.transitions.duration.standard,
   })};
  &:hover {
     background-color: ${theme.palette.secondary.main};
    transform: scale(3);
   background-image: null;
  
  }
  `}
`;

function MyCard(props) {
  const { title, description, image, price, rating } = props;

  return (
    <div id="wrapper">
      <NoSsr>
        <ThemeProvider theme={theme}>
          <Card>
            <CardHeader className="header" title={title} />
            <CardMedia
              className="img"
              style={{ height: "250px" }}
              image={image}
            />

            <CardContent>
              <div className="overlay">
                <div className="content">
                  <Button className="hide">Add to Cart</Button>
                </div>
              </div>
              <div className="description">{description}</div>
              <Divider />
              <div className="footer">
                <Grid item style={{ flex: 1 }}>
                  Price - {price}
                </Grid>

                {rating}
              </div>
            </CardContent>
          </Card>
        </ThemeProvider>
      </NoSsr>
    </div>
  );
}

export default MyCard;
