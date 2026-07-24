const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");
const app = express();

connectDB();


const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productroutes");
const orderRoutes = require("./routes/orderroutes");
const analyticsRoutes = require("./routes/analyticsroutes");
app.use(cors(
  {
    origin: ['http://localhost:3000','http://127.0.0.1:3000'],
    credentials: true
  }
));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/orders", orderRoutes);
app.use("/api/analytics", analyticsRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "ReWear backend is working properly",
    status: "ok",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "healthy" });
});

app.use("/api/users", authRoutes);
app.use("/api/products", productRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`ReWear backend running on http://localhost:${PORT}`);
});

