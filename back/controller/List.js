const List = require('../model/List');

const ListController = {
	getLists: (req, res) => {
		List.find()
		.populate({
			path: 'lists',
			model: 'List'
		})
		.exec((err, lists) => {
			if (err) { res.send(err) }
			res.json(lists);
		})
	},

	createList: (req, res) => {
		var list = new List();
	    list.title = req.body.title;
	    list.save((err) => {
	      if (err) {
	        return res.send(err);
	      }
	      res.json({
	        message: `List ${list.title} created !`
	      });
	    });
	},

	// updateList: (req, res) => {
	//     List.findByIdAndUpdate(req.params.id, { $set: req.body}, {new: true}, (err, project) => {
	//       if (err) {
	//         return res.send(err).status(500);
	//       }
	//       res.json(project)
	//     });
	// },

	// deleteList: (req, res) => {
	//     List.findByIdAndRemove(req.params.id, (err, project) => {
	//       if (err) {
	//         return res.send(err).status(500);
	//       }
	//       let str = (list) ? `List ${project.title} deleted !` : 'No list were deleted.'
	//       res.json({ message: str })
	//     });
	// },
	
	getSingleList: (req, res) => {
		List.findOne({_id: req.params.id}, function(err, doc) {
			res.json(doc);
		});
	},

	createTask: (req, res) => {
		var list = {};
		var query = List.findOne({_id: req.params.id});
		query.exec(function (err, document) {
		  if (err) return handleError(err);
		  list =  document;
		  newTask = new Object;
		  newTask.title = req.body.title;
		  var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
		  var uniqid = randLetter + Date.now();
		  newTask.id = uniqid;
		  newTask.user = req.body.user;
		  state = new Object;
		  state.title = req.body.state.title;
		  state.color = req.body.state.color;
		  newTask.state = state;
		  list.tasks.push(newTask);
		  list.save((err) => {
		      if (err) {
		        return res.send(err);
		      }
		      res.json({
		        message: `Task created into list ${list.title} !`
		      });
		  });
		})
		
	},
}

module.exports = ListController;