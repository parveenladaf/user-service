"use strict";

const UserManager = require("../biz/user.manager");

/**
 * Authentication Controller for handling login.
 */
class UserController extends BaseController {
  /**
   * default constructor 
   */
  constructor() { }


  async findOne(req, res) {
    try {
      const userManager = new UserManager();
      const result = await userManager.findOne(req.body);
      super.ok(res, result);
    } catch (err) {
      super.error(res, err);
    }
  }

  async findAll(req, res) {
    try {
      const userManager = new UserManager();
      const result = await userManager.findAll(req.body);
      super.ok(res, result);
    } catch (err) {
      super.error(res, err);
    }
  }

  async save(req, res) {
    try {
      const userManager = new UserManager();
      const result = await userManager.save(req.body);
      super.ok(res, result);
    } catch (err) {
      super.error(res, err);
    }
  }

  async update(req, res) {
    try {
      const userManager = new UserManager();
      const result = await userManager.update(req.body);
      super.ok(res, result);
    } catch (err) {
      super.error(res, err);
    }
  }

  async delete(req, res) {
    try {
      const userManager = new UserManager();
      const result = await userManager.delete(req.body);
      super.ok(res, result);
    } catch (err) {
      super.error(res, err);
    }
  }

}

module.exports = UserController;
