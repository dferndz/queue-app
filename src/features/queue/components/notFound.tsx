import React from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Button,
} from "@material-ui/core";
import Link from "next/link";
import { useRouter } from "next/router";

import { useStyles } from "./styles";

const NotFound = () => {
  const classes = useStyles();
  const router = useRouter();
  const qid = router.query.q || "";

  return (
    <Card>
      <CardHeader
        title={`Queue not found: ${qid}`}
        className={classes.header}
      />
      <CardContent>
        <Link href="/">
          <Button variant="contained" color="secondary">
            Find queue
          </Button>
        </Link>
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
  );
};

export default NotFound;
