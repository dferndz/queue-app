import { Queue } from "./types";
import { queues } from "./sample";

const getQueues = (str: string) => {
  return queues.filter((q: Queue) => q.id.match(`${str}`)).slice(0, 5);
};

export default (req, res) => {
  const search = req.query.q || "";
  if (search) res.status(200).json(getQueues(search));
  else res.status(200).json([]);
};
