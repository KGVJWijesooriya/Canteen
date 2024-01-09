const UserServices = require("../services/user_services");

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
