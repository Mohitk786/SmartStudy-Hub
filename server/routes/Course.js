// Import the required modules
const express = require("express")
const router = express.Router()

// Course Controllers Import
const {
  createCourse,
  getAllCourses,
  getCourseDetails,
  getFullCourseDetails,
  editCourse,
  getInstructorCourses,
  deleteCourse,
} = require("../controllers/Course")


// Categories Controllers Import
const {
  showAllCategories,
  createCategory,
  categoryPageDetails,
} = require("../controllers/Category")

// Sections Controllers Import
const {
  createSection,
  updateSection,
  deleteSection,
} = require("../controllers/Section")

// Sub-Sections Controllers Import
const {
  createSubSection,
  updateSubSection,
  deleteSubSection,
} = require("../controllers/Subsection")

// Rating Controllers Import
const {
  createRating,
  getAverageRating,
  getAllRating,
} = require("../controllers/RatingAndReview")

const {
  updateCourseProgress
} = require("../controllers/courseProgress");

// Importing Middlewares
const { auth, isInstructor, isStudent, isAdmin } = require("../middlewares/auth")


// Courses can Only be Created by Instructors
router.post("/course/createCourse", auth, isInstructor, createCourse)
//Add a Section to a Course
router.post("/course/addSection", auth, isInstructor, createSection)
// Update a Section
router.post("/course/updateSection", auth, isInstructor, updateSection)
// Delete a Section
router.post("/course/deleteSection", auth, isInstructor, deleteSection)
// Edit Sub Section
router.post("/course/updateSubSection", auth, isInstructor, updateSubSection)
// Delete Sub Section
router.post("/course/deleteSubSection", auth, isInstructor, deleteSubSection)
// Add a Sub Section to a Section
router.post("/course/addSubSection", auth, isInstructor, createSubSection)
// Get all Registered Courses
router.get("/course/getAllCourses", getAllCourses)
// Get Details for a Specific Courses
router.post("/course/getCourseDetails", getCourseDetails)
// Get Details for a Specific Courses
router.post("/course/getFullCourseDetails", auth, getFullCourseDetails)
// Edit Course routes
router.post("/course/editCourse", auth, isInstructor, editCourse)
// Get all Courses Under a Specific Instructor
router.get("/course/getInstructorCourses", auth, isInstructor, getInstructorCourses)
// Delete a Course
router.delete("/course/deleteCourse", deleteCourse)

router.post("/course/updateCourseProgress", auth, isStudent, updateCourseProgress);


// Category can Only be Created by Admin
router.post("/course/createCategory", auth, isAdmin, createCategory)
router.get("/course/showAllCategories", showAllCategories)
router.post("/course/getCategoryPageDetails", categoryPageDetails)



router.post("/course/createRating", auth, isStudent, createRating)
router.get("/course/getAverageRating", getAverageRating)
router.get("/course/getReviews", getAllRating)

module.exports = router