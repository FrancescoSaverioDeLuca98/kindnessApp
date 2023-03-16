import { connectMongo } from "../../utils/connectMongo";
import User from "../../models/userModel";

export default async function addUser(req, res) {
  const { name, email } = req.body;
  await connectMongo();
  const user = await User.create(req.body); 
}