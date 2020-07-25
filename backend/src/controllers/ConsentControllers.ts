import { Request, Response } from 'express'

class ConsentController {
  async index(req: Request, res: Response) {

    return res.send("Hello word");

  }
}

export default ConsentController;