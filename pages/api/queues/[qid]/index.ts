import { queues } from "../../firebase/queues";
import { Queue } from "../types";
import { getSession } from "next-auth/client";
import encription from "js-sha256";

/**
 * Select queue by id
 * @param id string
 * @returns Queue | null
 */
export const getQueue = async (id: string, session) => {
  const clean_id = id.replace(/[^\w\s]/gi, "");
  const qs = await queues.getAll();
  const q = qs.find((q: Queue) => q.id == clean_id);

  if (q) {
    if (session && session.user) {
      // authenticated
      const email_sha = encription.sha224(session.user.email);

      q.myPos = 0;
      q.count = 0;

      if (q.people) {
        q.count = q.people.length;
        q.people.map((sha: string, index: number) => {
          if (sha == email_sha) q.myPos = index + 1;
        });
      }
    } else {
      // not authenticated
      q.myPos = 0;
      q.count = 0;

      if (q.people) {
        q.count = q.people.length;
      }
    }
  } else {
    return null;
  }

  return qs.find((q: Queue) => q.id == clean_id);
};

export default async (req, res) => {
  const qid = req.query.qid || "";
  const session = await getSession({ req });

  if (qid) {
    getQueue(qid, session).then((q) => {
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
