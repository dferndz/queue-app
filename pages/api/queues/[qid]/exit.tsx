import React from "react";
import { getSession } from "next-auth/client";
import { queues } from "../../firebase/queues";
import { getQueue } from "./index";
import encription from "js-sha256";

export default async (req, res) => {
  const session = await getSession({ req });
  const qid = req.query.qid || "";

  if (!session || !session.user) {
    res.status(401).json({
      error: "not-authorized",
    });
    return;
  }

  const email_sha = encription.sha224(session.user.email!);

  if (await queues.exit(qid, email_sha)) {
    const q = await getQueue(qid, session);
    res.status(200).json(q);
    return;
  }

  res.status(401).json({
    error: "not-authorized",
  });
};
