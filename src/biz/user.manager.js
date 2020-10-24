"use strict";

const UserSchema = require("../schema/user.schema");

const User = require("../models/user.model");

var Validator = require("jsonschema").Validator;
var schemaValidator = new Validator();

const MESSAGE = require('../constant/message')
const ValidationError = require("../exception/validation.error");
const NoEntityFoundError = require("../exception/no-entity-found.error");

class UserManager {
  constructor() {
  }

  async saveUser(userData) {
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

  async findUsers() {
    try {

      const user = new User({});
      const res = await User.find();
      return res;

    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    try {

      const user = new User({});
      var myquery = { _id: id };
      await User.deleteOne(myquery);
      const res = { message: MESSAGE.USER_DELETE };
      return res;

    } catch (error) {
      throw error;
    }
  }

  async update(req) {
    try {

      // If results.errors is an empty array, then this validated successfully.
      var validationResult = schemaValidator.validate(req.body, UserSchema);
      if (validationResult.valid) {

        var myquery = { _id: req.params.id };
        const userEntity = await User.findOne(myquery);
        if (!userEntity) {
          throw new NoEntityFoundError(MESSAGE.USER_NOT_FOUND);
        }
        
        await User.updateOne( myquery , req.body);
        const res = { message: MESSAGE.USER_UPDATE };
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
