export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const hours = date.getHours();
  const minutes = date.getMinutes();

  const str = `${month}/${day}/${year} - ${hours}:${minutes}`;

  return str;
};

export const elapsed = (date: Date) => {
  const now = new Date(Date.now());
  const seconds = (now.getTime() - date.getTime()) / 1000;

  console.log(now);
  console.log(date);

  if (seconds < 0) return "0 seconds";
  if (seconds < 60) return `${Math.floor(seconds)} seconds`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)} minutes`;
  return `${Math.floor(seconds / 3600)} hours`;
};
