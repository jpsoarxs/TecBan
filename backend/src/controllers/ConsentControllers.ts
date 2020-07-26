import { Request, Response } from 'express'
import https from 'https'
import axios from 'axios'
import fs from 'fs'
import qs from 'qs'
import path from 'path'
require('dotenv/config')

class ConsentController {
  async create(req: Request, res: Response) {
    const httpsAgent = new https.Agent({
      cert: fs.readFileSync(path.resolve(__dirname, '..', 'certs', 'client_certificate.crt')),
      key: fs.readFileSync(path.resolve(__dirname, '..', 'certs', 'client_private_key.key')),
      rejectUnauthorized: false,
    });

    // create primary token for api
    axios({
      method: 'post',
      url: `${process.env.URL_AS}/token`,
      data: qs.stringify({
        grant_type: 'client_credentials',
        scope: 'accounts openid'
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + process.env.BASIC_KEY
      },
      httpsAgent
    }).then((response) => {
      const token = response.data.access_token

      const data = {
        "Data": {
          "Permissions": [
            "ReadAccountsBasic",
            "ReadAccountsDetail",
            "ReadBalances",
            "ReadBeneficiariesBasic",
            "ReadBeneficiariesDetail",
            "ReadDirectDebits",
            "ReadTransactionsBasic",
            "ReadTransactionsCredits",
            "ReadTransactionsDebits",
            "ReadTransactionsDetail",
            "ReadProducts",
            "ReadStandingOrdersDetail",
            "ReadProducts",
            "ReadStandingOrdersDetail",
            "ReadStatementsDetail",
            "ReadParty",
            "ReadOffers",
            "ReadScheduledPaymentsBasic",
            "ReadScheduledPaymentsDetail",
            "ReadPartyPSU"
          ]
        }, 
        "Risk": {}
      }
     
      axios({
        method: 'post',
        url: `${process.env.URL_RS}/open-banking/v3.1/aisp/account-access-consents`,
        data,
        headers : {
          'Content-Type': 'application/json',
          'x-fapi-financial-id': process.env.FINANCIAL_ID,
          'x-fapi-interaction-id': process.env.INTERACTION_ID,
          'Authorization': `Bearer ${token}`
        },
        httpsAgent
      }).then((response) => {
        const ConsentId = response.data.Data.ConsentId 
        axios({
          method: 'get',
          url: `${process.env.URL_RS}/ozone/v1.0/auth-code-url/${ConsentId}?scope=accounts&alg=none`,
          headers: {
            'Authorization': 'Basic ' + process.env.BASIC_KEY
          },
          httpsAgent
        }).then((response) => {
          // return the json url for authentication
          return res.json({ url: response.data });
        });
      });
    });

  }

  async index(req: Request, res: Response) {

<<<<<<< HEAD
    const httpsAgent = new https.Agent({
      rejectUnauthorized: false,
      cert: fs.readFileSync("./usercert.pem"),
      key: fs.readFileSync("./key.pem"),
      passphrase: "YYY"
    })

    // axios.get('http://localhost:3000', { httpsAgent })
    
    return res.send("Hello word");
=======
    const { code } = req.body

    if (!req.body.code) {
      return res.status(401).json({ message: 'Missing Token in Body' });
    }

    const httpsAgent = new https.Agent({
      cert: fs.readFileSync(path.resolve(__dirname, '..', 'certs', 'client_certificate.crt')),
      key: fs.readFileSync(path.resolve(__dirname, '..', 'certs', 'client_private_key.key')),
      rejectUnauthorized: false,
    });
    
    axios({
        method: 'post',
        url: `${process.env.URL_AS}/token`,
        data: qs.stringify({
          grant_type: 'authorization_code',
          scope: 'accounts',
          code,
          redirect_uri: 'http://www.google.co.uk'
        }),
        headers : {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${process.env.BASIC_KEY}`
        },
        httpsAgent
      }).then((response) => {
        return res.json(response.data)
      }, (error) => {
        return res.status(400).json(error.response.data)
      })
>>>>>>> 21e3eecc6940835093e1af0d0d866707acfeeb4d

  }
}

export default ConsentController;