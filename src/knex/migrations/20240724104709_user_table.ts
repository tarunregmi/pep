import type { Knex } from 'knex';

const TABLE_NAME = 'user';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments();
    table.text('name').notNullable();
    table.text('email').unique().notNullable();
    table.text('password').notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(TABLE_NAME);
}
