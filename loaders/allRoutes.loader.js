const express = require("express");
const errorHandler = require("../middlewares/errorHandler.middleware");
const postRoutes = require("../routes/post.route");
const userRoutes = require("../routes/user.route");

module.exports = function (app) {
  //middlewares
 app.use(express.static("public"));
 app.use(express.json());

 //routes
 app.use("/api/post", postRoutes);
 app.use("/api/user", userRoutes);

 //error handling middleware
 app.use(errorHandler);
};
