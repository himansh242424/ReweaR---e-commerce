const Order = require("../models/order");
const User = require("../models/user");
const Product = require("../models/product");

const getAdminStats = async (req, res) => {
    try {
        const orders = await Order.find();

        const totalOrders = orders.length;
        const totalUsers = await User.countDocuments({ role: "user" });
        const totalProducts = await Product.countDocuments();

        const totalIncome = orders.reduce((acc, order) => acc + (order.totalAmount || 0), 0);

        res.status(200).json({
            totalIncome,
            totalOrders,
            totalUsers,
            totalProducts
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getAdminStats };