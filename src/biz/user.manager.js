"use strict";

const UserRepository = require("../repository/user.repository");
const ConnectionProvider = require("../connection.provider");
const UserSchema = require("../schema/user.schema");

const MailManager = require("./mail.manager");
const LogManager = require("../biz/log.manager");

const DuplicateEntityError = require("../exception/duplicate-entity.error");
const ValidationError = require("../exception/validation.error");

const MESSAGE = require("../constant/message");

var Validator = require("jsonschema").Validator;
var schemaValidator = new Validator();
class UserManager {
    constructor() {
    }

    async save(userData) {
        try {

            // If results.errors is an empty array, then this validated successfully.
            var validationResult = schemaValidator.validate(userData, UserSchema);
            if (validationResult.valid) {


            }
        } catch (error) {
            throw error;
        }
    }

}
module.exports = UserManager;
