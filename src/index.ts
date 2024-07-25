import _knex from 'knex';
import knexConfig from './knexfile.js';
import users from './data/users.js';

const knex = _knex(knexConfig);

async function insertUsers(batchSize = 1000) {
  try {
    console.log('Start Inserting Data:');
    console.time('insert_users');

    await knex.transaction(async (trx) => {
      const chunks = [];

      for (let i = 0; i < users.length; i += batchSize) {
        chunks.push(users.slice(i, i + batchSize));
      }

      for (const chunk of chunks) {
        await knex.batchInsert('user', chunk).transacting(trx);
      }
    });

    console.timeEnd('insert_users');
    console.log('End Inserting Data:');
  } catch (error) {
    console.error('Error inserting users:', error);
  } finally {
    await knex.destroy();
  }
}

insertUsers(2000);
