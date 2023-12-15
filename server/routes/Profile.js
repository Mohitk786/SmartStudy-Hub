const express = require("express")
const router = express.Router()
const { auth, isInstructor } = require("../middlewares/auth")
const {
  deleteAccount,
  updateProfile,
  getAllUserDetails,
  updateDisplayPicture,
  getEnrolledCourses,
  instructorDashboard,
} = require("../controllers/Profile")


// Delet User Account
router.delete("/profile//deleteProfile", auth, deleteAccount)
router.put("/profile//updateProfile", auth, updateProfile)
router.get("/profile//getUserDetails", auth, getAllUserDetails)

// Get Enrolled Courses
router.get("/profile/getEnrolledCourses", auth, getEnrolledCourses)
router.put("/profile/updateDisplayPicture", auth, updateDisplayPicture)
router.get("/profile/instructorDashboard", auth, isInstructor, instructorDashboard)

module.exports = router