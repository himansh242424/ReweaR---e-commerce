const express = require("express");
const router = express.Router();
const { registerUser, loginUser, verifyEmail, getUsers } = require("../controller/authcontroller");
const { protect } = require("../middleware/authMiddleware");
const { admin } = require("../middleware/adminMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/verify-email", verifyEmail);
router.get("/users", protect, admin, getUsers);


module.exports = router;