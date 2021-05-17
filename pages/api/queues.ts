import { Queue } from "../../src/features/findQueue/types";

const queues: Queue[] = [
  { id: "cs439", school: "UT Austin" },
  { id: "cs429", school: "UT Austin" },
  { id: "m408d", school: "UT Austin" },
  { id: "cs331", school: "UT Austin" },
  { id: "m340l", school: "UT Austin" },
  { id: "cs439h", school: "UT Austin" },
  { id: "cs378", school: "UT Austin" },
  { id: "cs478", school: "UT Austin" },
  { id: "cs321", school: "UT Austin" },
];

const getQueues = (str: string) => {
  return queues.filter((q: Queue) => q.id.match(`${str}`)).slice(0, 5);
};

export default (req, res) => {
  const search = req.query.q || "";
  if (search) res.status(200).json(getQueues(search));
  else res.status(200).json([]);
};
