import React from "react";
import { useRouter } from "next/router";

const Queue = () => {
  const router = useRouter();
  const { q } = router.query;

  return <p>Queue: {q}</p>;
};

export default Queue;
