import Knex from 'knex'

export async function up(knex: Knex) {
  // criar tabela
  return knex.schema.createTable('properties_companys', table => {
    table.increments('id').primary();
    table.integer('propertie_id')
      .notNullable()
      .references('id')
      .inTable('properties');
    table.integer('company_id')
      .notNullable()
      .references('id')
      .inTable('companys');
  });
}

export async function down(knex: Knex) {
  // voltar atras (deletar tabela)
  return knex.schema.dropTable('properties_companys');
}