import { Queue } from "./types";
import { queues } from "../firebase/queues";

const getQueues = async (str: string) => {
  const clean = str.replace(/[^\w\s]/gi, "");
  const qs: Queue[] = await queues.getAll();
  return qs.filter((q: Queue) => q.id.match(`${clean}`)).slice(0, 5);
};

export default (req, res) => {
  const search = req.query.q || "";
  if (search) {
    getQueues(search).then((qs) => {
      res.status(200).json(qs);
    });
  } else res.status(200).json([]);
};
