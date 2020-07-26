import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { sign } from 'jsonwebtoken';
import User from '../entities/User';

class SessionController {
  public async create(request: Request, response: Response): Promise<Response | {
    user: User,
    token: string
  }> {
    const { cpf, password } = request.body;
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({
      where: {
        cpf
      }
    });

    if (!user) {
      return response.json({ error: 'User not found' })
    }

    if (user.password !== password) {
      return response.json({ error: 'Password does not match' })
    }

    const token = sign({}, '4f388c6e1b086fb09892fa700036480d', {
      subject: user.id,
      expiresIn: '1d'
    });

    return response.json({ user, token })
  }
}

export default new SessionController()