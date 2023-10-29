import { hashPassword } from "../../../lib/auth";
import clientPromise from "../../../lib/mongodb";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  console.log("1")

  const data = req.body;
  const client = await clientPromise;
  const db = client.db("ccnetwork");
  const response = await db.collection("videos").insertOne(data);

  res.status(200).json({msg:"uploaded"});
}

export default handler;
