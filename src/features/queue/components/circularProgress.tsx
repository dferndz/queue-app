import React from "react";

import CircularProgress, {
  CircularProgressProps,
} from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const CircularProgressWithLabel = (
  props: CircularProgressProps & { text?: string; circleColor?: string }
) => {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        variant="determinate"
        {...props}
        style={{ color: props.circleColor }}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {props.text && (
          <Typography variant="caption" component="div" color="textSecondary">
            {props.text}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default CircularProgressWithLabel;
