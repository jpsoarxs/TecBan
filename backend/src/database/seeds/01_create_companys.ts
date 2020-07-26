import Knex from 'knex'

export async function seed(knex: Knex) {
  await knex('companys').insert([
    { 
      company: "Sua casa", email: "scasa@suacada.com.br", password: "123456789",
      document: "45.875.454/1234-98", number: "81940028922", address: "R. Teste Cordeiro",
      complement: "Sala 21/B", city: "Recife", state: "PE", contry: "BR",
      avatar: "https://png.pngtree.com/template/20190719/ourlarge/pngtree-simple-cg-eg-gg-gsg-csg-initials-company-vector-logo-and-image_235698.jpg",
      banner: "https://www.suafranquia.com/views/sources/images/conteudo/principal/7010d9dbacb66a07111e43408c73012e.jpg"
    },
    { 
      company: "Seu lar", email: "seular@seular.com.br", password: "123456789",
      document: "45.875.454/1234-98", number: "81940028922", address: "R. Teste Cordeiro",
      complement: "Sala 21/B", city: "Recife", state: "PE", contry: "BR",
      avatar: "https://png.pngtree.com/template/20190719/ourlarge/pngtree-simple-cg-eg-gg-gsg-csg-initials-company-vector-logo-and-image_235698.jpg",
      banner: "https://www.suafranquia.com/views/sources/images/conteudo/principal/7010d9dbacb66a07111e43408c73012e.jpg"
    },
    { 
      company: "Cazira", email: "buy@cazira.com.br", password: "123456789",
      document: "45.875.454/1234-98", number: "81940028922", address: "R. Teste Cordeiro",
      complement: "Sala 21/B", city: "Recife", state: "PE", contry: "BR",
      avatar: "https://png.pngtree.com/template/20190719/ourlarge/pngtree-simple-cg-eg-gg-gsg-csg-initials-company-vector-logo-and-image_235698.jpg",
      banner: "https://www.suafranquia.com/views/sources/images/conteudo/principal/7010d9dbacb66a07111e43408c73012e.jpg"
    },
    { 
      company: "Crush", email: "cru@crush.com.br", password: "123456789",
      document: "45.875.454/1234-98", number: "81940028922", address: "R. Teste Cordeiro",
      complement: "Sala 21/B", city: "Recife", state: "PE", contry: "BR",
      avatar: "https://png.pngtree.com/template/20190719/ourlarge/pngtree-simple-cg-eg-gg-gsg-csg-initials-company-vector-logo-and-image_235698.jpg",
      banner: "https://www.suafranquia.com/views/sources/images/conteudo/principal/7010d9dbacb66a07111e43408c73012e.jpg"
    },
  ]);
}