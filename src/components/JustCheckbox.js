import {  makeStyles, createStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => createStyles({
  checkRoot: {
    boxSizing: 'border-box',
    width: 14,
    height: 14,
    borderRadius: 0,
    "&:hover": {
      backgroundColor: "transparent"
    },
    '&$checked': {
        color: 'lightgreen',
        backgroundColor: 'black',
        width: 13,
        height: 13,
        border: '1px solid black',
    },
  },
  checked: {
    
  },
  checkIcon: {
    width: 14,
    height: 14,
    backgroundColor: "white",
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5"
    },
    "input:disabled ~ &": {
      boxShadow: "none"
    }
  },
  checkCheckedIcon: {
    backgroundColor: "#137cbd",
    backgroundImage: "blue",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundColor: "gray"
    },
    "input:hover ~ &": {
      backgroundColor: "#106ba3"
    }
  },
  inputClasses: {
    backgroundColor: 'pink',
    fill: 'black',
  }, 
  container: {
    '&checked': {
      backgroundColor: 'black',
    },
  },
}));

const JustCheckbox = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Checkbox
        classes={{
          root: classes.checkRoot,
          checked: classes.checked,
        }}
        disableRipple
        color="default"
        inputProps={{
          classes: classes.inputClasses,
        }}
      />
    </div>
  )
}

export default JustCheckbox;

