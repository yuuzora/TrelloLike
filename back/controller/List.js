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
	}
}

module.exports = ListController;