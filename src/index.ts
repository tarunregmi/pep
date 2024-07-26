import users from './data/users.data.js';
import sequelize from './sequelize.js';
import User from './data/user.model.js';

const insertUsers = async () => {
  try {
    await sequelize.sync({ force: true });

    console.log('Start Inserting Data:');
    console.time('insert_users');

    await User.bulkCreate(users, { validate: true });

    console.timeEnd('insert_users');
    console.log('End Inserting Data:');
  } catch (error) {
    console.error('Error inserting users:', error);
  } finally {
    await sequelize.close();
  }
};

insertUsers();
