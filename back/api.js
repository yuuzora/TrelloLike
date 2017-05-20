const express = require('express');
const {Router} = express;

const mongoose = require('mongoose');

const ListController = require('./controller/List');

const bodyParser = require('body-parser');
const router = Router();

mongoose.connect(`mongodb://<dbuser>:<dbpassword>@ds129281.mlab.com:29281/heroku_db`);

router.use(bodyParser.json({'extended': true}));
router.use(bodyParser.json());

router.get('/', (req, res) => {
  res.send('This is the homepage');
});

router.get('/lists', ListController.getLists);

module.exports = router;