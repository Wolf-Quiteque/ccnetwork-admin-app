import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const cliente = await clientPromise;
  const db = cliente.db("glab_admin");
  const resul = await db
    .collection("cumbigroup")
    .find({ estado: "Aprovado" })
    .toArray();

  res.json(resul);
}
