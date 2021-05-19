import { fsDatabase } from "./";
import defaultView from "../";
import { Queue } from "../queues/types";

const getAll = async () => {
  const qs: Queue[] = (await fsDatabase.ref("queues").get()).val();
  return qs;
};

export const queues = {
  getAll: getAll,
};

export default defaultView;
