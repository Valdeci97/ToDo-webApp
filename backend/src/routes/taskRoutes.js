const express = require('express');

const create = require('../controller/createTask');
const update = require('../controller/updateTask');
const getAll = require('../controller/getAll');
const getById = require('../controller/getById');
const deletetask = require('../controller/deleteTask');
const done = require('../controller/doneTask');
const late = require('../controller/lateTask');
const today = require('../controller/todayTask');
const week = require('../controller/weekTask');
const month = require('../controller/monthTask');
const year = require('../controller/yearTask');

const taskValidation = require('../middleware/taskValidation');
const dateValidation = require('../middleware/dateValidation');

const router = express.Router();

router.post('/',taskValidation, dateValidation, create);

router.put('/:id',dateValidation, update);

router.get('/:id', getById);

router.delete('/:id', deletetask);

router.put('/:id/:done', done);

router.get('/filter/all/:macaddress', getAll);

router.get('/filter/late/:macaddress', late);

router.get('/filter/today/:macaddress', today);

router.get('/filter/week/:macaddress', week);

router.get('/filter/month/:macaddress', month);

router.get('/filter/year/:macaddress', year);

module.exports = router;
