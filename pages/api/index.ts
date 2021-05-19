export default (req, res) => {
  res.status(404).json({ error: "not-found" });
};
