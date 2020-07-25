import { Request, Response } from 'express'

class TesteController {
  async index(req: Request, res: Response) {

    return res.send("Hello word");

  }
}

export default TesteController;