import { Request, Response } from 'express'
import https from 'https'
import axios from 'axios'
import fs from 'fs'
import path from 'path'
require('dotenv/config')

class BalanceController {

  async index(req: Request, res: Response) {

    const { token } = req.body

    if (!token) {
      return res.status(401).json({ message: 'Missing Token in Body' });
    }

    const httpsAgent = new https.Agent({
      cert: fs.readFileSync(path.resolve(__dirname, '..', 'certs', 'client_certificate.crt')),
      key: fs.readFileSync(path.resolve(__dirname, '..', 'certs', 'client_private_key.key')),
      rejectUnauthorized: false,
    });
    
    axios({
        method: 'get',
        url: `${process.env.URL_RS}/open-banking/v3.1/aisp/balances`,
        headers : {
          'Content-Type': 'application/json',
          'x-fapi-financial-id': process.env.FINANCIAL_ID,
          'x-fapi-interaction-id': process.env.INTERACTION_ID,
          'Authorization': `Bearer ${token}`
        },
        httpsAgent
      }).then((response) => {
        return res.json(response.data)
      }, (error) => {
        return res.status(400).json(error.response.data)
      })

  }

  async show(req: Request, res: Response) {
    const { id } = req.params
    const { token } = req.body

    if (!token) {
      return res.status(401).json({ message: 'Missing Token in Body' });
    }

    const httpsAgent = new https.Agent({
      cert: fs.readFileSync(path.resolve(__dirname, '..', 'certs', 'client_certificate.crt')),
      key: fs.readFileSync(path.resolve(__dirname, '..', 'certs', 'client_private_key.key')),
      rejectUnauthorized: false,
    });
    
    axios({
        method: 'get',
        url: `${process.env.URL_RS}/open-banking/v3.1/aisp/accounts/${id}/balances`,
        headers : {
          'Content-Type': 'application/json',
          'x-fapi-financial-id': process.env.FINANCIAL_ID,
          'x-fapi-interaction-id': process.env.INTERACTION_ID,
          'Authorization': `Bearer ${token}`
        },
        httpsAgent
      }).then((response) => {
        return res.json(response.data)
      }, (error) => {
        return res.status(400).json(error.response.data)
      })

  }
}

export default BalanceController;