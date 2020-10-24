"use strict";

const UserManager = require("../biz/user.manager");
const BaseController = require('./base.controller');

/**
 * Authentication Controller for handling login.
 */
class UserController extends BaseController {
  /**
   * default constructor 
   */
  constructor() {
    super()
  }

  async findAll(req, res) {
    try {
      const userManager = new UserManager();
      const result = await userManager.findUsers();
      super.ok(res, result);
    } catch (err) {
      super.error(res, err);
    }
  }

  async save(req, res) {
    try {
      const userManager = new UserManager();
      const result = await userManager.saveUser(req.body);
      super.ok(res, result);
    } catch (err) {
      super.error(res, err);
    }
  }

  async update(req, res) {
    try {
      const userManager = new UserManager();
      const result = await userManager.update(req);
      super.ok(res, result);
    } catch (err) {
      super.error(res, err);
    }
  }

  async delete(req, res) {
    try {
      const userManager = new UserManager();
      const result = await userManager.delete(req.params.id);
      super.ok(res, result);
    } catch (err) {
      super.error(res, err);
    }
  }

}

module.exports = UserController;
