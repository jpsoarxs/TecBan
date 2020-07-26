import Knex from 'knex'

export async function up(knex: Knex) {
  // criar tabela
  return knex.schema.createTable('properties', table => {
    table.increments('id').primary();
    table.integer('company').notNullable();
    table.integer('type').notNullable()
    table.integer('status').notNullable();
    table.integer('area').notNullable();
    table.integer('betrooms').notNullable();
    table.integer('suits').notNullable();
    table.integer('parkingSpots').notNullable();
    table.integer('floor').notNullable();
    table.integer('propertyTax').notNullable();
    table.integer('complexFee').notNullable();
    table.integer('price').notNullable();
    table.text('description').notNullable();
    table.string('image').notNullable();
    table.string('banner').notNullable();
    table.integer('images').notNullable();
  });
}

export async function down(knex: Knex) {
  // voltar atras (deletar tabela)
  return knex.schema.dropTable('properties');
}