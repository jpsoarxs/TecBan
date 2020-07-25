import { Router } from 'express';

const userRoutes = Router();

userRoutes.post('/', (req, res) => {
  return res.json(({ ok: true }));
});

export default userRoutes;
