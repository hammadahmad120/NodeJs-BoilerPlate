const express = require("express");
const verifyAuth = require("../middlewares/verifyAuth.middleware");
const asyncHandler = require("../helpers/asyncRouteHandler.helper");
const postController = require("../controllers/post.controller");
const router = express.Router();

router.use(verifyAuth);

router.post(
  "/", asyncHandler(postController.createNewPost));
router.put(
  "/",asyncHandler(postController.updatePost));
router.delete(
  "/:postId",
  asyncHandler(postController.deletePost));
router.get("/", asyncHandler(postController.getAllUserPosts));

module.exports = router;
