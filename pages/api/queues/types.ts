import { Queue as ClientQueue } from "../../../src/features/findQueue/types";
import defaultView from "../";

type Queue = {
  people: string[];
} & ClientQueue;

export type { Queue };
export default defaultView;
