import { fsDatabase } from "./";
import defaultView from "../";
import { Queue } from "../queues/types";

const getAll = async () => {
  const qs: Queue[] = (await fsDatabase.ref("queues").get()).val();
  return qs;
};

const join = async (qid: string, uid: string) => {
  let people = [];
  let found = false;

  await (
    await fsDatabase.ref("queues").get()
  ).forEach((q) => {
    if (q.val().id == qid) {
      people = q.child("people").val() || [];
      if (people.find((key) => key == uid)) {
        found = false;
        return;
      }
      people.push(uid);
      q.child("people").ref.set(people);
      found = true;
    }
  });

  return found;
};

const exit = async (qid: string, uid: string) => {
  let people = [];
  let queue = null;

  await (
    await fsDatabase.ref("queues").get()
  ).forEach((q) => {
    if (q.val().id == qid) {
      people = q.child("people").val() || [];
      queue = q;
    }
  });

  if (queue) {
    people = people.filter((p) => p != uid);
    queue.child("people").ref.set(people);
    return true;
  }

  return false;
};

export const queues = {
  getAll: getAll,
  join: join,
  exit: exit,
};

export default defaultView;
