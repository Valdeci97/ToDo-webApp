const express = require('express');
const create = require('../controller/createTask');

const router = express.Router();

router.post('/', create);

module.exports = create;
