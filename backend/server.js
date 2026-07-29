const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db"); // Inside backend/config/db.js

dotenv.config();
connectDB();

const app = express();

app.use(cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000', process.env.FRONTEND_URL],
    credentials: true
}));

app.use(express.json());

// API Routes (Since server.js is inside backend, these look inside backend/routes/)
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/products", require("./routes/productroutes"));
app.use("/api/orders", require("./routes/orderroutes"));
app.use("/api/payment", require("./routes/paymentroutes"));
app.use("/api/analytics", require("./routes/analyticsroutes"));

// Serve frontend in production (Goes up one level from backend/ to reach root frontend/build)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));

    app.get(/.*/, (req, res) => {
        res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'));
    });
} else {
    app.get('/', (req, res) => {
        res.send('ReWear API is running in Development mode...');
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`ReWear backend running on http://localhost:${PORT}`);
});