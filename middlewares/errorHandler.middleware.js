const responseSender = require("../helpers/responseSender.helper");

function errorHandler(err, req, res, next) {
  //all types of errors will come here

  if (!err.code) {
   // We are setting code in all types of errors generated from endpoints, if no code it means unhandled error
   // Log unhandled errors here
   console.log("Unexpected error: ", err);
  }

  if (err.name === "ValidationError" && err.errors) {
    const errMsgs = Object.keys(err.errors).map((errKey) => {
      return (
        err.errors[errKey]?.properties?.message ?? "Some validation failed"
      );
    });
    return responseSender.sendValidationError(res, errMsgs);
  } else
    return responseSender.sendErrorResponse(res, err.message, err.code ?? 500);
}

module.exports = errorHandler;

