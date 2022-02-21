const express = require('express');

const create = require('../controller/createTask');
const update = require('../controller/updateTask');
const getAll = require('../controller/getAll');
const getById = require('../controller/getById');
const deletetask = require('../controller/deleteTask');
const done = require('../controller/doneTask');
const late = require('../controller/lateTask');

const taskValidation = require('../middleware/taskValidation');
const dateValidation = require('../middleware/dateValidation');
const macValidation = require('../middleware/macaddressValidation');

const router = express.Router();

router.post('/',taskValidation, dateValidation, create);

router.put('/:id',dateValidation, update);

router.get('/:id', getById);

router.delete('/:id', deletetask);

router.put('/:id/:done', done);

router.get('/filter/all', macValidation, getAll);

router.get('/filter/late', macValidation, late);

module.exports = router;
