import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    marginBottom: 50,
  },
  media: {
    height: 100,
    minWidth: 200,
  },
  items: {
    display: 'inline-block',
    marginLeft: 20,
  },
});

export default function MenuItem(props) {
  const classes = useStyles();
  const { item } = props;


  function ActionLink() {
    window.location.assign(`/CreateBillItem/${item.fields.price}/${item.fields.name}`)
  }

  return (
    <div className={classes.items}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={item.fields.imglink}
            title={item.fields.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {item.fields.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {item.fields.price}, {item.fields.notes}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button onClick={ActionLink} size="small" color="primary">
         Add to Order
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
