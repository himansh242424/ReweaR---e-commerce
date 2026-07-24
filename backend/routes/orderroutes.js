const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { admin } = require("../middleware/adminMiddleware");
const {
  createOrder,
  getAllOrders,
  myOrders,
  UpdateOrderStatus,
  deleteOrder,
} = require("../controller/ordercontroller");

router.route("/").post(protect, createOrder).get(protect, admin, getAllOrders);
router.route("/myorders").get(protect, myOrders);
router.route("/:id/status").put(protect, admin, UpdateOrderStatus);


module.exports = router;