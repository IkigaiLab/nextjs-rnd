import nc from 'next-connect';
import db from '../../Utils/db';
import Product from '../../models/Product';
import data from '../../Utils/data';
import User from '../../models/User';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  await Product.deleteMany();
  await Product.insertMany(data.products);
  await User.deleteMany();
  await User.insertMany(data.users);
  await db.disconnect();
  res.send({ message: 'seeded successfully' });
});

export default handler;
