import clientPromise from "../../../lib/mongodb";
export default async function handler(req, res) {

  const cliente = await clientPromise;
  const db = cliente.db("ccnetwork");
  const data = await db
    .collection("videos")
    .find({}).toArray();

  res.json(data);
}
