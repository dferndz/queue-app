export type Queue = {
  id: string;
  school: string;
  status: "open" | "close";
  count: number;
  lastOpened: Date;
  myPos?: number;
};
