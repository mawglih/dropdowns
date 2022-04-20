import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Checkbox from "@material-ui/core/Checkbox";
const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  icon: {
    borderRadius: 3,
    width: 16,
    height: 16,
    backgroundColor: "#ebf1f5",
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5"
    },
    "input:disabled ~ &": {
      boxShadow: "none"
    }
  },
  checkedIcon: {
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
  }
});
const CustomCheckbox = ({
  checked,
}) => {
  const classes = useStyles();
  return (
    <Checkbox
      className={classes.root}
      checked={checked}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      inputProps={{ "aria-label": "decorative checkbox" }}
    />
  );
};

export default CustomCheckbox;
