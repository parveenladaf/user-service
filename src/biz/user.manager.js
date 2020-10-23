"use strict";

const UserSchema = require("../schema/user.schema");

const User = require("../models/user.model");

var Validator = require("jsonschema").Validator;
var schemaValidator = new Validator();

const MESSAGE = require('../constant/message')
const ValidationError = require("../exception/validation.error");

class UserManager {
  constructor() {
  }

  async save(userData) {
    try {

      // If results.errors is an empty array, then this validated successfully.
      var validationResult = schemaValidator.validate(userData, UserSchema);
      if (validationResult.valid) {

        const user = new User({
          name: userData.name,
          mobile_no: userData.mobile_no,
          address: userData.address,
          email_id: userData.email_id,
        });
        /**
         * Save user to database
         */
        await user.save();
        const res = { message: MESSAGE.USER_SAVED };
        return res;
      } else {
        throw new ValidationError(
          MESSAGE.VALIDATION_ERROR,
          validationResult.errors
        );
      }
    } catch (error) {
      throw error;
    }
  }

}
module.exports = UserManager;
