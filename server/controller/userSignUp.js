const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");

async function userSignupController(req, res) {
  try {
    const { email, password, name } = req.body;

    const user = await userModel.findOne({ email });

    if (user) {
      throw new Error("Already user exist.");
    }

    if (!email) {
      throw new Error("Please provide email");
    }
    if (!password) {
      throw new Error("Please provide password");
    }
    if (!name) {
      throw new Error("Please provide name");
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hashSync(password, salt);
    if (!hashedPassword) {
      throw new Error("Something is wrong");
    }

    const payload = {
      ...req.body,
      password: hashedPassword,
    };

    const userData = new userModel(payload);
    const saveUser = await userData.save();
    res.status(201).json({
      data: saveUser,
      success: true,
      error: false,
      message: "User created successfully...!",
    });
  } catch (error) {
    res.json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}

module.exports = userSignupController;
