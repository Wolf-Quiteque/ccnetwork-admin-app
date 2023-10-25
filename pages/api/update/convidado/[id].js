import clientPromise from "../../../../lib/mongodb";
import { ObjectId } from "bson";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  var data = req.body;

  const { id } = req.query;
  const cliente = await clientPromise;
  const db = cliente.db("glab_admin");

  await db
    .collection("cumbigroup")
    .updateOne({ _id: new ObjectId(id) }, { $set: data });

  res.json("addes successfuly");
}
