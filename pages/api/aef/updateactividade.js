import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "bson";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  var data = req.body;
  const { id } = data;

  const cliente = await clientPromise;
  const db = cliente.db("aef");

  delete data.id;

  await db
    .collection("actividades")
    .updateOne({ _id: new ObjectId(id) }, { $set: data });

  res.json("addes successfuly");
}
