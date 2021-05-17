import { Queue } from "../types";
import { queues } from "../sample";

const getQueue = (id: string) => {
  return queues.find((q: Queue) => q.id == id);
};

export default (req, res) => {
  const qid = req.query.qid || "";
  if (qid) {
    const queue = getQueue(qid);

    if (queue) {
      res.status(200).json(queue);
      return;
    }
  }

  res.status(404).json({
    error: "not-found",
  });
};
