/************************************************************************************************************************/ 
/********************* THIS HELPER IS RESULT OF REFACTORING THE REQUEST ROUTES ( ./routes/Request.js ) ******************/ 
/************************************************************************************************************************/ 
var db = require("../models");

exports.getRequests = (req, res) => {
	db.Request.find() // Here, remember that we are using Promise. That means this code will be different without Promise.
	.then(  Requests => res.json(Requests) ) // We should customize the return here to give back just the fields that matters.
	.catch( err  	 => res.send(err	 ) );
}

exports.createRequest = (req, res) => {
	req.headers.ip = req.ip;
	req.headers.resource = req.body.resource;
	db.Request.create( req.headers ) 
	.then(  newRequest => res.status(201).json(newRequest) ) // 201 here is the code for successfull created.
	.catch( err  	 => res.send(err	 ) );
}

exports.getRequest = (req, res) => {
	db.Request.findById( req.params.requestId ) 
	.then(  foundRequest => res.json(foundRequest) ) // Returns the Request found
	.catch( err  	 => res.send(err	 ) );
}

exports.updateRequest = (req, res) => {
	db.Request.findOneAndUpdate( {_id: req.params.requestId}, req.body, {new: true} ) // {new: true} here means to return the new version of Request after update. If we do not put this parameter, will be return the last version of customer.
	.then(  updatedRequest => res.json(updatedRequest) ) // returns the Request, updated or the old version.
	.catch( err  	 => res.send(err	 ) );
}

exports.deleteRequest = (req, res) => {
	db.Request.remove( {_id: req.params.requestId} ) 
	.then(  deleteStatus => res.json(deleteStatus) ) 
	.catch( err  	 => res.send(err	 ) );
}

module.exports = exports;