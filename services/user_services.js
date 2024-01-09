const UserModel = require("../model/user_model");
const jwt = require('json')
const jsonModule = require('json');

class UserServices {
  static async registerUser(email, password) {
    try {
      const createUser = new UserModel({ email, password });
      return await createUser.save();
    } catch (err) {
        print('Error: ' + err)
    }
  }

  static async checkuser(email) {
    try {
      return await UserModel({ email });
    } catch (error) {
      print('Error: ' + error)
    }
  }

static async generateToken(tokenData,secretKey,jwt_expire) {
    return jwt.sign(tokenData,secretKey,{expiresIn: jwt_expire});
}
}
module.exports = UserServices;
