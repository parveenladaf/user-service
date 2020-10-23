'use strict';
const HEADER = require('../constant/header');
const STATUS = require('../constant/status');
const ErrorManager = require('../biz/error.manager');

class BaseController {

    ok(res, result) {
        res.status(STATUS.OK)
            .header(HEADER.CONTENT_TYPE, HEADER.JSON)
            .send(JSON.stringify(result));
    }

    error(res, err) {
        res.status(err.status || STATUS.ERROR)
            .send(ErrorManager.format(err));


    }
}

module.exports = BaseController;