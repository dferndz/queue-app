import React from "react";
import { CheckCircle, Cancel } from "@material-ui/icons";
import Link from "next/link";
import { Button, Grid } from "@material-ui/core";
import { useSession } from "next-auth/client";

import GetInQueue from "./getInQueue";
import CircularProgress from "./circularProgress";
import { formatDate, elapsed } from "../utils";
import Label from "./label";
import { Queue } from "../types";

const OpenLabel = () => {
  return (
    <Label
      IconComponent={CheckCircle}
      text="Open"
      iconColor="green"
      textColor="black"
      prefix="Queue status: "
    />
  );
};

const CloseLabel = () => {
  return (
    <div>
      <Label
        IconComponent={Cancel}
        text="Close"
        iconColor="red"
        textColor="black"
        prefix="Queue status: "
      />
      <Link href="/">
        <Button
          style={{ marginTop: "20px" }}
          color="secondary"
          variant="contained"
        >
          Find Queue
        </Button>
      </Link>
    </div>
  );
};

type Props = {
  queue: Queue;
  join: () => void;
  exit: () => void;
};

const QueueOpenStatus = ({ queue, join, exit }: Props) => {
  if (queue.status == "open") return <OpenLabel />;
  return <CloseLabel />;
};

const QueueData = ({ queue, join, exit }: Props) => {
  const [session, loading] = useSession();

  return (
    <Grid container spacing={3}>
      <Grid item xs={10}>
        <Label prefix="Queue size: " text={`${queue.count}`} />
        <hr />
        <Label
          prefix="Opened for: "
          text={elapsed(new Date(queue.lastOpened))}
        />
        <Label
          prefix="Queue opened: "
          text={formatDate(new Date(queue.lastOpened))}
        />
        <hr />
        <GetInQueue queue={queue} join={join} exit={exit} />
      </Grid>
      {queue.myPos != 0 && (
        <Grid item xs={2}>
          <CircularProgress
            size={120}
            value={100 - ((queue.myPos - 1) * 100) / queue.count}
            text={`${queue.myPos}/${queue.count}`}
            circlecolor="#579d42"
          />
        </Grid>
      )}
    </Grid>
  );
};

const QueueStatus = ({ queue, join, exit }: Props) => {
  return (
    <div>
      <QueueOpenStatus queue={queue} join={join} exit={exit} />
      {queue.status == "open" && (
        <QueueData queue={queue} join={join} exit={exit} />
      )}
    </div>
  );
};

export default QueueStatus;
