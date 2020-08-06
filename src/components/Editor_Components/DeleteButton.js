import React from "react";
import axios from "axios";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function DeleteButton(props) {
  const classes = useStyles();
  // console.log(props.id)
  // console.log(props.type)
  // let 'drink' === 'drinks';
  const deletePost = async () => {
    const data = await axios.delete(
      `https://api.airtable.com/v0/app9S6k06MQoTSJbG/${props.type}/${props.id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      }
    );
    // props.invokeFetch(!props.fetchEntries)
    ActionLink()
  };
  function ActionLink() {
    window.location.assign("/MainMenuEditor");
  }

  return (
    <div>
      <Button
      onClick={deletePost}
    variant="contained"
    color="secondary"
    className={classes.button}
    startIcon={<DeleteIcon />}
  >
        Delete
  </Button>

    </div>
  );
}
//onMouseUp={ActionLink} 