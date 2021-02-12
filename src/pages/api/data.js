import db from "../../db/data.json";

export default (req, res) => {
  res.status(200).json(db);
};
