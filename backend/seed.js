const bcrypt = require("bcryptjs");
const connectDB = require("./config/db");
const User = require("./models/user");
const Product = require("./models/product");
const Order = require("./models/order");

const seedDatabase = async () => {
  try {
    await connectDB();

    await Promise.all([
      User.deleteMany({}),
      Product.deleteMany({}),
      Order.deleteMany({}),
    ]);

    const passwordHash = await bcrypt.hash("Password123!", 10);

    const users = await User.insertMany([
      {
        name: "Admin User",
        email: "admin@rewear.com",
        password: passwordHash,
        role: "admin",
        verified: true,
      },
      {
        name: "John Doe",
        email: "john@rewear.com",
        password: passwordHash,
        role: "user",
        verified: true,
      },
      {
        name: "Jane Smith",
        email: "jane@rewear.com",
        password: passwordHash,
        role: "user",
        verified: true,
      },
    ]);

    const products = await Product.insertMany([
      {
        name: "Classic Hoodie",
        description: "Soft cotton hoodie for everyday comfort.",
        price: 1299,
        category: "Clothing",
        imageUrl: "https://res.cloudinary.com/demo/image/upload/v1710000000/hoodie.jpg",
        stock: 15,
        rating: 4.6,
        numberOfReviews: 18,
      },
      {
        name: "Running Sneakers",
        description: "Lightweight sneakers for daily workouts.",
        price: 2499,
        category: "Footwear",
        imageUrl: "https://res.cloudinary.com/demo/image/upload/v1710000000/sneakers.jpg",
        stock: 10,
        rating: 4.8,
        numberOfReviews: 24,
      },
      {
        name: "Canvas Backpack",
        description: "Durable backpack with extra storage space.",
        category: "Accessories",
        price: 899,
        imageUrl: "https://res.cloudinary.com/demo/image/upload/v1710000000/backpack.jpg",
        stock: 20,
        rating: 4.4,
        numberOfReviews: 12,
      },
    ]);

    const orders = await Order.insertMany([
      {
        user: users[1]._id,
        products: [
          { product: products[0]._id, quantity: 1 },
          { product: products[1]._id, quantity: 1 },
        ],
        totalAmount: 3798,
        address: {
          fullName: "John Doe",
          street: "123 Main Street",
          city: "New York",
          postalCode: "10001",
          country: "USA",
        },
        paymentID: "pay_dummy_001",
        Status: "Delivered",
      },
      {
        user: users[2]._id,
        products: [{ product: products[2]._id, quantity: 2 }],
        totalAmount: 1798,
        address: {
          fullName: "Jane Smith",
          street: "456 Park Avenue",
          city: "Los Angeles",
          postalCode: "90001",
          country: "USA",
        },
        paymentID: "pay_dummy_002",
        Status: "Processing",
      },
    ]);

    console.log(`Seed completed successfully.`);
    console.log(`Inserted ${users.length} users, ${products.length} products, and ${orders.length} orders.`);
  } catch (error) {
    console.error("Seed failed:", error.message);
    process.exit(1);
  } finally {
    process.exit(0);
  }
};

seedDatabase();
