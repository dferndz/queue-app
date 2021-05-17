import React from "react";
import { useRouter } from "next/router";

import Link from "next/link";
import {
  Button,
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  TextField,
} from "@material-ui/core";

import QueueNotFound from "./components/notFound";
import QueueLoading from "./components/loading";
import useQueue from "./useQueue";
import { useStyles } from "./components/styles";

const SingleQueue = () => {
  const classes = useStyles();
  const router = useRouter();
  const qid = router.query.q! as string;
  const { data, isLoading, errors } = useQueue(qid);

  return (
    <div>
      <div className={classes.bgImage}></div>
      <Grid
        className={classes.container}
        container
        alignContent="center"
        justify="center"
      >
        <Grid item xs={10} sm={6} md={6} lg={4}>
          {isLoading ? (
            <QueueLoading />
          ) : data ? (
            <Card>
              <CardHeader
                className={classes.header}
                title={`Queue: ${data.id} - ${data.school}`}
              />
              <CardContent>
                <Grid container spacing={3}></Grid>
              </CardContent>
              <CardActions>
                <Link href="/school">
                  <Button size="small" color="secondary">
                    Register school
                  </Button>
                </Link>
                <Link href="/instructor">
                  <Button size="small" color="secondary">
                    Instructor account
                  </Button>
                </Link>
              </CardActions>
            </Card>
          ) : (
            <QueueNotFound />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default SingleQueue;