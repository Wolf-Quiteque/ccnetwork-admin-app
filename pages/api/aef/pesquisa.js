import clientPromise from "../../../lib/mongodb";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body;
  const client = await clientPromise;

  const db = client.db("aef");

  const response = await db.collection("pesquisa").insertOne(data);

  res.status(200).json(response);
}

export default handler;
