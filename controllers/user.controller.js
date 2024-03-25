const joiValidator = require("../helpers/joiValidator.helper");
const userSchemas = require("../helpers/joi-schemas/userSchemas");
const userService = require("../services/user.service");
const responseSender = require("../helpers/responseSender.helper");
const exceptionGenerator = require( "../helpers/exceptionGenerator.helper");

module.exports = {
  createNewUser: async (req, res) => {
    let errorMsgs = joiValidator(
      req.body,
      userSchemas.createUserSchema
    );
    if (errorMsgs) {
      return responseSender.sendValidationError(res, errorMsgs);
    }
   const isUserExist = await userService.isUserExistWithEmail(req.body.email);
    if(isUserExist) throw exceptionGenerator("User with email already exist");
    const user = await userService.createNewUser(req.body);

    return responseSender.sendSuccessResponse(res, user, "User Created Successfully");
  },
  loginUser: async (req, res) => {
    const errorMsgs = joiValidator(req.body, userSchemas.loginSchema);
    if (errorMsgs) {
      return responseSender.sendValidationError(res, errorMsgs);
    }

    const user = await userService.loginUser(
      req.body.email,
      req.body.password
    );
    return responseSender.sendSuccessResponse(res, user);
  }
};