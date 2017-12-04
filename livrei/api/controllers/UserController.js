/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	signup: function signup(req,res){
		if(_.isUndefined(req.param('username')) || _.isUndefined(req.param('email')) || _.isUndefined(req.param('password')) ){
			return res.badRequest("Error - Missing param");
		}

		User.create({username: req.param('username'), email: req.param('email'), password: req.param('password')}).exec(function signupUser(err, user){
			if(err){
				console.log('erro :', err);
				return res.json({status: "Error - Invalid attribute"});
			}

			console.log('Create user on signup:  ', user );
			return res.json({status: "Success", id: user.id});

		});

	},

	addBook: function addBook(req, res) {

		if(_.isUndefined(req.param('id')) || _.isUndefined(req.param('isbn')) || _.isUndefined(req.param('title'))){
			return res.badRequest("Missing parameter");
		} 

		//ToDo creating a new book to this user
		//User.update()

		return res.json({status: "Ok", messagem: "user id = " + req.param('id') + " addBook valid"});
	}
	
};

