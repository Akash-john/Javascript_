const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const joi = require("joi");
const joiPasswordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
});

//jwtauthtoken

userSchema.methods.generateAuthtoken = () => {
  const token = jwt.sign({ _id: this.id }, process.env.JWT_PRIVATE_KEY, {
    expiresIn: "7d",
  });
  return token;
};

//user Model
const User = mongoose.model("user", userSchema);

//Joi Validation

const validate = (data) => {
  const schema = joi.object({
    firstName: joi.string().required().label("First Name"),
    lastName: joi.string().required().label("Last Name"),
    email: joi.string().email().required().label("Email"),
    password: joiPasswordComplexity().required().label("Password"),
    password: joiPasswordComplexity().required().label("Confirm Password"),
  });
  return schema.validate(data);
};

module.exports = { User, validate };
