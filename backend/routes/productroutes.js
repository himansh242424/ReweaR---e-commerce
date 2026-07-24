const express = require("express");

const { protect } = require("../middleware/authMiddleware");
const { admin } = require("../middleware/adminMiddleware");

const { getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} = require("../controller/productcontroller");

const multer = require("multer");
const storage = multer.diskStorage({});
const upload = multer({ storage });

const router = express.Router();
//all products
router.route("/").get(getProducts).post(protect, admin, upload.single("image"), createProduct);
//specific product
router.route("/:id").get(getProductById).put(protect, admin, upload.single("image"), updateProduct).delete(protect, admin, deleteProduct);

module.exports = router; 