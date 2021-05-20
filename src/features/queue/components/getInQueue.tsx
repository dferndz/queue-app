import React, { useCallback, MouseEvent } from "react";
import { useSession, signIn, signOut } from "next-auth/client";
import { Link, Button } from "@material-ui/core";

import { Queue } from "../types";
import useQueue from "../useQueue";

type Props = {
  queue: Queue;
  join: () => void;
  exit: () => void;
};

const GetInQueue = ({ queue, join, exit }: Props) => {
  const [session, loading] = useSession();

  const handleSignin = useCallback((event: MouseEvent) => {
    event.preventDefault();
    signIn();
  }, []);

  const handleSignout = useCallback((event: MouseEvent) => {
    event.preventDefault();
    signOut();
  }, []);

  return (
    <div>
      {session && session.user ? (
        //authenticated
        <div>
          <span>
            Signed in as {session.user.name}.{" "}
            <Link href="#" onClick={handleSignout}>
              Sign out.
            </Link>
          </span>
          <br />
          <br />
          {queue.myPos != 0 ? (
            <Button onClick={exit} color="secondary" variant="contained">
              Exit the queue
            </Button>
          ) : (
            <Button onClick={join} color="secondary" variant="contained">
              Join the queue
            </Button>
          )}
        </div>
      ) : (
        // not authenticated
        <div>
          <span>
            <Link href="#" onClick={handleSignin}>
              Sign in
            </Link>{" "}
            to join the queue.
          </span>
        </div>
      )}
    </div>
  );
};

export default GetInQueue;
