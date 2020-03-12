import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const USER_SCHEMA = new Schema({
  _id: ObjectId,
  name: String,
  email: String,
  password: String,
  fidelidade: Number
});

export const User = async () => {
  const client = await mongoose.connect('mongodb://localhost:27017/tutorialNode', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const UserModel = client.model('User', USER_SCHEMA);
  const collection = new UserModel();
  console.log(collection);
}