import { PrismaClient } from '@prisma/client';
import users from './data/users.js';

const prisma = new PrismaClient();

async function main() {
  console.log('Start Inserting Data:');
  console.time('insert_users');
  await prisma.user.createMany({ data: users });
  console.timeEnd('insert_users');
  console.log('End Inserting Data:');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
