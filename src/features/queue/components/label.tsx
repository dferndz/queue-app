import React from "react";
import moduleName, { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
}));

type Props = {
  IconComponent?: any;
  prefix?: string;
  text?: string;
  iconColor?: string;
  textColor?: string;
};

const Label = ({ IconComponent, text, iconColor, textColor, prefix }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {prefix && <span style={{ marginRight: "5px" }}>{prefix}</span>}
      {IconComponent && (
        <IconComponent style={{ color: iconColor, marginRight: "5px" }} />
      )}
      {text && <span style={{ color: textColor }}>{text}</span>}
    </div>
  );
};

export default Label;
