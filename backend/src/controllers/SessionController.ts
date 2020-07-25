import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../entities/User';

class SessionController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { cpf, password } = request.body;
    const usersRepository = getRepository(User);

    const user = usersRepository.findOne({
      where: {
        cpf
      }
    });

    if (!user) {
      return response.json({ error: 'User not found' })
    }
  }
}

export default new SessionController()