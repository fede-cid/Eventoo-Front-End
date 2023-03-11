import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    marginTop:50,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: 500,
    width:'max-content'
  },
  media: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: 500,
    width:400,
  },
});

const CardCarousel = ({ cards }) => {
  const classes = useStyles();

  return (
    <Carousel>
      {cards.map((card) => (
        <Card key={card.id} className={classes.card}>
          <CardMedia
            className={classes.media}
            image={card.imageUrl}
            title={card.title}
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              {card.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {card.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Carousel>
  );
};

export default CardCarousel;