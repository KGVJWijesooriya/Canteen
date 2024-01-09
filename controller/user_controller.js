const UserServices = require("../services/user_services");
const User = require("../model/user_model");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.register = async (req, res, next) => {
  try {
    // Access form data from the request body
    const { email, password } = req.body;

    // Log the received data (optional)
    console.log("Received data:", { email, password });

    // Use the data to register the user
    const successRes = await UserServices.registerUser(email, password);

    // Send a success response to the client
    res.json({ status: true, success: "User Registered Successfully" });
  } catch (error) {
    // Handle errors and send an error response
    console.error(error);
    res.status(500).json({ status: false, error: "Internal Server Error" });
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Log the received data (optional)
    //console.log("Received data:", { email, password });
    const user = await User.findOne({ email });

    //console.log(user)
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }

    // print(user)
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch === false) {
      res.status(401).json({ message: "password incorect" });
      console.log("password is incorrect");
    } else {
      console.log("password is correct");
      let tokenData = { _id: user._id, email: user.email };
      const token = jwt.sign(tokenData, process.env.JWTKEY, {
        expiresIn: "1h",
      });

      res.status(200).json({ status: true, token: token });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, error: "Internal Server Error" });
  }
};
