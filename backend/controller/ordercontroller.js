const order = require("../models/order");

const sendEmail = require("../util/sendmail");

// Create a new order
const createOrder = async (req, res) => {
    const { userId, products, totalAmount, address, paymentID } = req.body;
  try {
    const newOrder = new order({
      user: userId,
      products,
      totalAmount,
      address,
      paymentID
    });
    await newOrder.save();

    await sendEmail({
      to: req.user.email,
      subject: "Order Confirmation",
      text: `Thank you for your order! Your order ID is ${newOrder._id}.`,
    });

    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};  

const myOrders = async (req, res) => { 
    try {
        const orders = await order.find({ user: req.user._id }).populate("products.product");
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }   
};

const getAllOrders = async (req, res) => {
    try {
        const orders = await order.find().populate("user").populate("products.product");
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const UpdateOrderStatus = async (req, res) => {
    try {
        const { orderId, status } = req.body;
        const updatedOrder = await order.findByIdAndUpdate(orderId, { status }, { new: true });
        if (!updatedOrder) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.json(updatedOrder);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteOrder = async (req, res) => {
    try {
        const { orderId } = req.params;
        const deletedOrder = await order.findByIdAndDelete(orderId);
        if (!deletedOrder) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.json({ message: "Order deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createOrder, myOrders, getAllOrders, UpdateOrderStatus, deleteOrder };