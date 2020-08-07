import React from "react";
import MenuItem from "./MenuItem";
import DrinkItem from "./DrinkItem";
import { Link } from "react-router-dom";
import "./Create_Menu_Item/CreateMenuItem.css";

///For Button
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

///Icons
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    right: 0,
  },
}));

export default function MainMenuEditor(props) {
  const classes = useStyles();
  return (
    <div>
      <Link to="/LiveMenu" className="menu-icon-editor">
        <HomeRoundedIcon />
      </Link>

      <Link to="/CreateMenuItem">
        <Fab
          size="small"
          color="secondary"
          aria-label="add"
          className={classes.margin}
        >
          <AddIcon />
        </Fab>
      </Link>

      <h1>Main Menu Edit</h1>

      <h1>Apps</h1>
      {props.apps.map((app) => (
        <MenuItem key={app.id} item={app} type="app" />
      ))}

      <h1>Mains</h1>
      {props.mains.map((main) => (
        <MenuItem key={main.id} item={main} type="main" />
      ))}

      <h1>Drinks</h1>
      {props.drinks.map((drink) => (
        <DrinkItem key={drink.id} item={drink} type="drink" />
      ))}

      <h1>Wine / Cocktails</h1>
      {props.alcoholDrinks.map((alcoholDrink) => (
        <DrinkItem
          key={alcoholDrink.id}
          item={alcoholDrink}
          type="alcoholDrink"
        />
      ))}
      <br /> <br /> <br />
    </div>
  );
}
