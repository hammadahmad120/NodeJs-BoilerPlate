const usersData = require("../models/user");
const exceptionGenerator =  require("../helpers/exceptionGenerator.helper");
const { generateAuthToken } = require("../utils");

module.exports = {
  createNewUser: async (userObj) => {
    userId = usersData.length + 1;
    const newUser = {userId, ... userObj}
    usersData.push(newUser);

    return newUser;
  },
  isUserExistWithEmail: async (email) => {
    const userExist = usersData.find(u => u.email === email);
    return userExist ? true : false;
  },
  loginUser: async (email, password) => {
    const user = usersData.find(u => u.email === email && u.password === password);
    if (!user) throw exceptionGenerator("Invalid email or password");
    user.token = generateAuthToken(user);
    return user;
  },
};