const express = require('express');
const {Router} = express;

const mongoose = require('mongoose');

const ListController = require('./controller/List');


const bodyParser = require('body-parser');
const router = Router();

mongoose.connect(`mongodb://socketIoUser:antoine2199@ds129281.mlab.com:29281/heroku_db`);

router.use(bodyParser.json({'extended': true}));
router.use(bodyParser.json());

router.get('/', (req, res) => {
  res.send('This is the homepage');
});

router.get('/lists', ListController.getLists);
router.get('/list/:id', ListController.getSingleList);

router.post('/lists', ListController.createList);
// router.put('/lists/:id', ListController.updateList);
// router.delete('/lists/:id', ListController.deleteList);
router.post('/lists/:id/task', ListController.createTask);
// router.put('/lists/:id/task/:taskId', ListController.updateTask);
// router.delete('/lists/:id/task/:taskId', ListController.deleteTask);


module.exports = router;
