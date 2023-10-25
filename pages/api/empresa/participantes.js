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

  var number = 0;
  for (let index = 0; index < resul.length; index++) {
    number = number + Number(resul[index].numParticipants);
  }

  res.json(number);
}
