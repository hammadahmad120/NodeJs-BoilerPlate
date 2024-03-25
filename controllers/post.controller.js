const joiValidator = require("../helpers/joiValidator.helper");
const postSchemas = require("../helpers/joi-schemas/postSchemas");
const postService = require("../services/post.service");
const responseSender = require("../helpers/responseSender.helper");
const exceptionGenerator = require( "../helpers/exceptionGenerator.helper");

module.exports = {
  createNewPost: async (req, res) => {
    const errorMsgs = joiValidator(req.body, postSchemas.createPostSchema);
    if (errorMsgs) {
      return responseSender.sendValidationError(res, errorMsgs);
    }
    const course = await postService.createPost(req.user.userId, req.body);
    return responseSender.sendSuccessResponse(res, course);
  },
  updatePost: async (req, res) => {
    const errorMsgs = joiValidator(
      req.body,
      postSchemas.updatePostSchema
    );
    if (errorMsgs) {
      return responseSender.sendValidationError(res, errorMsgs);
    }
    const post = await postService.updatePost(
      req.user.userId,
      req.body
    );
    return responseSender.sendSuccessResponse(res, post);
  },
  deletePost :async (req, res)=>{
    const postId = req.params.postId;
    if(isNaN(postId)) throw exceptionGenerator("postId should be a valid integer");
    await postService.deletePost(req.user.userId, parseInt(postId));
    return responseSender.sendSuccessResponse(res, null, "Post Deleted Successfully");

  },
  getAllUserPosts: async(req, res) => {
    try{
      const posts  = await postService.getAllPosts(req.user.userId);
      return responseSender.sendSuccessResponse(res, posts);
    }catch(error){
      if(error.code === 404) return responseSender.sendSuccessResponse(res, []);
      throw error;
    }
  }
};