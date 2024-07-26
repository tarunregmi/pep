import users from './data/users.data.js';
import sequelize from './sequelize.js';
import User from './data/user.model.js';

const insertUsers = async () => {
  try {
    await sequelize.sync({ force: true });

    await User.bulkCreate(users, { validate: true });
  } catch (error) {
    console.error('Error inserting users:', error);
  } finally {
    await sequelize.close();
  }
};

insertUsers();
