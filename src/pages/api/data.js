import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const grid = await db.collection("item").find().toArray();
  const sort = await db.collection("item").find().sort({ label: 1 }).toArray();
  const mostVisited = await db
    .collection("item")
    .find()
    .sort({ click: -1, label: 1 })
    .limit(6)
    .toArray();

  const groups = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  //const list = [{group: "Mais visitados", data: mostVisited}];

  const list = groups.map((group) => {
    const data = sort.filter((item) => item.label?.startsWith(group));
    return {
      group,
      data,
    };
  });

  list.unshift({
    group: "Mais usados",
    data: mostVisited,
  });

  res.status(200).json({
    grid: grid,
    list: list,
  });
};
