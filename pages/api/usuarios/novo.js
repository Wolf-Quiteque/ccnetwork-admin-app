import { hashPassword } from "../../../lib/auth";
import clientPromise from "../../../lib/mongodb";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body;

  const { email, cargo, nome } = data;

  const client = await clientPromise;

  const db = client.db("aef");

  const existingUser = await db
    .collection("usuarios")
    .findOne({ email: email });

  if (existingUser) {
    res.status(422).json({ message: "usuarioexiste" });
    return;
  }

  const userpassword = "aefangola2023";
  const hashedPassword = await hashPassword(userpassword);

  const response = await db.collection("usuarios").insertOne({
    email: email,
    password: hashedPassword,
    cargo: cargo,
    nome: nome,
  });

  res.status(200).json(response);
}

export default handler;
