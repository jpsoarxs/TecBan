import Knex from 'knex'

export async function up(knex: Knex) {
  // criar tabela
  return knex.schema.createTable('companys', table => {
    table.increments('id').primary();
    table.string('company').notNullable();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.string('document').notNullable();
    table.string('number').notNullable();
    table.string('address').notNullable();
    table.string('complement').notNullable();
    table.string('city').notNullable();
    table.string('state').notNullable();
    table.string('contry').notNullable();
    table.string('avatar').notNullable();
    table.string('banner').notNullable();
  });
}

export async function down(knex: Knex) {
  // voltar atras (deletar tabela)
  return knex.schema.dropTable('companys');
}