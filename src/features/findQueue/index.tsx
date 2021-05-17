import React, { useCallback, useState, ChangeEvent } from "react";
import {
  Button,
  Grid,
  TextField,
  Card,
  CardActions,
  CardHeader,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";

import SearchResults from "./components/results";
import useQueues from "./useQueues";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
  },
  header: {
    backgroundColor: "#bf5700",
    color: "white",
  },
}));

const QueueFinder = () => {
  const [selected, setSelected] = useState<boolean>(false);
  const [queueId, setQueueId] = useState<string>("");
  const { data } = useQueues(queueId);
  const router = useRouter();
  const classes = useStyles();

  const handleChange = useCallback((event: ChangeEvent) => {
    const target = event.target as any;
    setSelected(false);
    setQueueId(target.value as string);
  }, []);

  const handleSelect = useCallback((id: string) => {
    setSelected(true);
    setQueueId(id);
  }, []);

  const handleNext = useCallback(() => {
    router.push(`/${queueId}`);
  }, [queueId]);

  return (
    <Grid
      className={classes.container}
      container
      alignContent="center"
      justify="center"
    >
      <Grid item xs={10} sm={6} md={6} lg={4}>
        <Card>
          <CardHeader className={classes.header} title="Find a queue" />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  onChange={handleChange}
                  label="Queue id"
                  variant="outlined"
                  value={queueId}
                  fullWidth
                />
                {data && data.length > 0 && !selected && (
                  <SearchResults data={data} onSelect={handleSelect} />
                )}
              </Grid>
              <Grid item xs={12}>
                <Button
                  disabled={!selected}
                  variant="contained"
                  color="secondary"
                  onClick={handleNext}
                >
                  Next
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default QueueFinder;
