import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CircularProgress,
  Grid,
} from "@material-ui/core";

import { useStyles } from "./styles";

const QueueLoading = () => {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader title="Loading..." className={classes.header} />
      <CardContent>
        <Grid container justify="center">
          <Grid item>
            <CircularProgress />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default QueueLoading;
