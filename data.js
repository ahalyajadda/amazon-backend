import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Ahalya',
      email: 'ahalya@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jaswanth',
      email: 'Jaswanth@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Nike Slim shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg',
      price: 120,
      countInStock: 0,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      name: 'Tshirt',
      slug: 'tshirt',
      category: 'T-Shirts',
      image: '/images/p2.jpg',
      price: 25,
      countInStock: 5,
      brand: 'Tshirt',
      rating: 3.9,
      numReviews: 30,
      description: 'high quality tshirt',
    },
    {
      name: 'Adidas Fit Slim shirt',
      slug: 'adidas-fit-shirt',
      category: 'Pants',
      image: '/images/p3.jpg',
      price: 90,
      countInStock: 0,
      brand: 'Puma',
      rating: 4.8,
      numReviews: 38,
      description: 'high quality shirt',
    },
    {
      name: 'Nike Slim pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 75,
      countInStock: 5,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 25,
      description: 'high quality product',
    },
  ],
};

export default data;
