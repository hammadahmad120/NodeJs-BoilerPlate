const exceptionGenerator = require("../helpers/exceptionGenerator.helper");
const postsData = require("../models/post");

module.exports = {
  createPost: async ( userId, postObj) => {
   const newPost = {userId, id: postsData.length + 1, ...postObj }
   postsData.push(newPost);
    return newPost;
  },
  updatePost: async (userId, updatedPost) => {
    const postIndex = postsData.findIndex(p => p.userId === userId && p.id === updatedPost.id);
    if (postIndex === -1) throw exceptionGenerator("Post to update not found", 404);
    postsData[postIndex] = {...postsData[postIndex], ...updatedPost};
    return postsData[postIndex];
  },
  deletePost: async(userId, postId) =>{
    const toDelPostIndex = postsData.findIndex( p => p.userId === userId && p.id === postId);
    if(toDelPostIndex === -1) throw exceptionGenerator("Post to delete not found", 404);
    postsData.splice(toDelPostIndex, 1);
  },
  getAllPosts: async (userId) => {
    const posts = postsData.filter(p => p.userId === userId);
    if(!posts.length) throw exceptionGenerator("No Posts found", 404)
    return posts;
  },
};
