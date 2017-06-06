const mongoose = require('mongoose');
const {Schema} = mongoose;

const ListSchema = new Schema({
  'title': String,
  'tasks': [{
    'title' : String,
    'user' : String,
    'state' : {'title' : String, 'color': String}
  }]
});


module.exports = mongoose.model('List', ListSchema);