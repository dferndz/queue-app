import { queues } from "../../firebase/queues";
import { Queue } from "../types";

/**
 * Select queue by id
 * @param id string
 * @returns Queue | null
 */
const getQueue = async (id: string) => {
  const qs = await queues.getAll();
  return qs.find((q: Queue) => q.id == id);
};

export default (req, res) => {
  const qid = req.query.qid || "";

  if (qid) {
    getQueue(qid).then((q) => {
      if (q) res.status(200).json(q);
      else {
        res.status(404).json({
          error: "not-found",
        });
      }
    });
  } else {
    res.status(404).json({
      error: "not-found",
    });
  }
};
