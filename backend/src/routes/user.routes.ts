import { Router } from 'express';
import { getRepository } from 'typeorm';

import User from '../entities/User';

const userRoutes = Router();

userRoutes.post('/', async (req, res) => {
  const { cpf, password } = req.body;
  const usersRepository = getRepository(User);

  const user = usersRepository.create({ cpf, password });

  await usersRepository.save(user);

  return res.json({ user });
});

export default userRoutes;
