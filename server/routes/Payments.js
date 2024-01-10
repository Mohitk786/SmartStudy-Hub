// Import the required modules
const express = require("express")
const router = express.Router()

const { capturePayment, verifyPayment, sendPaymentSuccessEmail } = require("../controllers/Payments")
const { auth, isInstructor, isStudent, isAdmin } = require("../middlewares/auth")
router.post("/payment/capturePayment", auth, isStudent, capturePayment)
router.post("/payment/verifyPayment",auth, isStudent, verifyPayment)
router.post("/payment/sendPaymentSuccessEmail", auth, isStudent, sendPaymentSuccessEmail);

module.exports = router