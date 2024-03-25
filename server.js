const express = require("express");

require("dotenv").config({
  path: process.env.NODE_ENV ? ".env" : ".env.development",
});
const app = express();
require("./loaders/allRoutes.loader")(app);

process.on("uncaughtException", (ex) => {
  // log uncaught exceptions here
  process.exit(1);
});

process.on("unhandledRejection", (ex) => {
  // log unhandled rejections here
  process.exit(1);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
