import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function LoginButton() {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        size="large"
        color="primary"
        className={classes.margin}
        type="submit"
      >
        Submit
      </Button>
    </div>
  );
}
