import { Request, Response } from 'express'
import https from 'https'
import axios from 'axios'
import jwt from 'jsonwebtoken';
import fs from 'fs'
import path from 'path'
require('dotenv/config')

class AuthController {
  async index(req: Request, res: Response) {

    if (!req.headers.authorization || req.headers.authorization.indexOf('Bearer ') === -1) {
      return res.status(401).json({ message: 'Missing Authorization Header' });
    }

    const token =  req.headers.authorization.split(' ')[1];

    const httpsAgent = new https.Agent({
      cert: fs.readFileSync(path.resolve(__dirname, '..', 'certs', 'client_certificate.crt')),
      key: fs.readFileSync(path.resolve(__dirname, '..', 'certs', 'client_private_key.key')),
      rejectUnauthorized: false,
    });


    const secret = process.env.SECRET_API || ""

    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        return res.status(401).json({ auth: false, message: 'Invalid token' }); 
      }

      return res.json({ auth: true, message: 'Token valid' })

    })

  }
}

export default AuthController;