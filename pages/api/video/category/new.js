import { hashPassword } from "../../../../lib/auth";
import clientPromise from "../../../../lib/mongodb";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body;

  const client = await clientPromise;

  const db = client.db("ccnetwork");
  const response = await db.collection("category").insertOne(req.body);

  res.status(200).json(response);
}

export default handler;
