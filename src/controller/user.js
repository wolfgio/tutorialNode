import { User } from '../model/user';

export const userController = (req, res) => {
  return res.send({ name: 'Giovanny' });
}

export const returnUserNameController = async (req, res) => {
  const { name } = req.body;
  User();
  res.send({ name });
}