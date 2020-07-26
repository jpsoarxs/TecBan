import Knex from 'knex'

export async function seed(knex: Knex) {
  await knex('properties').insert([
    { 
      company: 1, status: 1, area: 110, betrooms: 3, parkingSpots: 2, floor: 15, 
      propertyTax: 500, complexFee: 120, price: 375000, description: "Olá mundo",
      image: "https://www.quintoandar.com.br/img/xxl/893091089-619.8434670065176MG0692.jpg",
      banner: "https://www.quintoandar.com.br/img/xxl/893091089-554.4464720106391MG0667.jpg",
      images: 1
    },
    { 
      company: 1, status: 2, area: 32, betrooms: 1, parkingSpots: 1, floor: 6, 
      propertyTax: 520, complexFee: 50, price: 2100, description: "Olá mundo",
      image: "https://www.quintoandar.com.br/img/xxl/893022953-94.31627310049939MG5283.jpg",
      banner: "https://www.quintoandar.com.br/img/xxl/893022953-320.41422483499605MG5278.jpg",
      images: 2
    },
    { 
      company: 2, status: 2, area: 25, betrooms: 1, parkingSpots: 1, floor: 5, 
      propertyTax: 450, complexFee: 40, price: 2700, description: "Olá mundo",
      image: "https://www.quintoandar.com.br/img/xxl/893066522-329.9743359792309Barco6920.JPG",
      banner: "https://www.quintoandar.com.br/img/xxl/893066522-329.9743359792309Barco6920.JPG",
      images: 3
    },
    { 
      company: 3, status: 1, area: 110, betrooms: 3, parkingSpots: 2, floor: 15, 
      propertyTax: 500, complexFee: 120, price: 240000, description: "Olá mundo",
      image: "https://www.quintoandar.com.br/img/lrg/892990761-656.274078465085MCD9921.jpg",
      banner: "https://www.quintoandar.com.br/img/lrg/892990761-656.274078465085MCD9921.jpg",
      images: 4
    },
  ]);
}