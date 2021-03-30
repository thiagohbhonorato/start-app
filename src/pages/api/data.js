import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const data = await db.collection("item").find().toArray();
  res.status(200).json(data);
};
