import { Request, Response } from 'express'
import axios from 'axios'
import https from 'https'
import fs from 'fs'

class ConsentController {
  async index(req: Request, res: Response) {

    const httpsAgent = new https.Agent({
      rejectUnauthorized: false,
      cert: fs.readFileSync("./usercert.pem"),
      key: fs.readFileSync("./key.pem"),
      passphrase: "YYY"
    })

    // axios.get('http://localhost:3000', { httpsAgent })
    
    return res.send("Hello word");

  }
}

export default ConsentController;