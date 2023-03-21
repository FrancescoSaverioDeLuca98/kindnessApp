import { connectMongo } from "../../utils/connectMongo";
import User from "../../models/userModel";
import { connect } from "mongoose";

export default async function addUser(req, res) {
  try {
    console.log('Connect to mongo');
    await connectMongo();
    console.log('Connect to mongo');
    console.log('Adding User');
    const user = await User.create(req.body);
    console.log('user added');
    console.log('user' + user);
  } catch (error) {
    console.log(error);
    res.json({ error: error });
  }
  const { name, email } = req.body;
  await connectMongo();
  const user = await User.create(req.body);
} 