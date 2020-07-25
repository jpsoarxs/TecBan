import { Request, Response } from 'express';

class SessionController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { cpf, password } = request.body;

    
  }
}

export default new SessionController()