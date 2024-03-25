const express = require("express");
const asyncHandler = require("../middlewares/asyncRouteHandler.middleware");
const userController = require("../controllers/user.controller");
const router = express.Router();

router.post(
  "/createUser",
  asyncHandler(userController.createNewUser));
router.post("/login",
   asyncHandler(userController.loginUser));

module.exports = router;
