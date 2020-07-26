import { Request, Response } from 'express'
import knex from '../database/connection'
require('dotenv/config')

class PropertiesController {
  async index(req: Request, res: Response) {

    const items = await knex('properties').select('*');
    const serializedItems = items.map(item => {
      return { 
        id: item.id,
        company: item.company, 
        status: item.status, 
        area: item.area, 
        betrooms: item.betrooms, 
        parkingSpots: item.parkingSpots, 
        floor: item.floor, 
        propertyTax: item.propertyTax, 
        complexFee: item.complexFee, 
        price: item.price, 
        description: item.description,
        image: item.image,
        banner: item.banner,
        images: item.images
      }
    })

    return res.json(serializedItems);
    
  }

  async show(req: Request, res: Response) {

    const { id } = req.params

    const items = await knex('properties').where('id', id).first();

    if (!items) {
      return res.status(400).json({ message: 'Property not found' })
    }

    return res.json(items);
    
  }
}

export default PropertiesController;