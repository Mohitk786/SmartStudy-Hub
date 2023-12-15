// Import the required modules
const express = require("express")
const router = express.Router()

// Import the required controllers and middleware functions
const {
  login,
  signup,
  sendotp,
  changePassword,
} = require("../controllers/Auth")
const {
  resetPasswordToken,
  resetPassword,
} = require("../controllers/ResetPassword")

const { auth } = require("../middlewares/auth")

router.post("/auth/login", login)
router.post("/auth/signup", signup)
router.post("/auth/sendotp", sendotp)
router.post("/changepassword", auth, changePassword)




// Route for generating a reset password token
router.post("/auth/reset-password-token", resetPasswordToken)

// Route for resetting user's password after verification
router.post("/auth/reset-password", resetPassword)

module.exports = router