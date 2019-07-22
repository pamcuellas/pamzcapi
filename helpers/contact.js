/************************************************************************************************************************/ 
/********************* THIS HELPER IS RESULT OF REFACTORING THE CONTACT ROUTES ( ./routes/Contact.js ) ******************/ 
/************************************************************************************************************************/ 
var db = require("../models");

exports.getContacts = (req, res) => {
	db.Contact.find()   
	.then(  contacts => res.json(contacts) ) // We should customize the return here to give back just the fields that matters.
	.catch( err  	 => res.send(err	 ) );
}

exports.createContact = (req, res) => {
	req.body.ip = req.ip; // Add the user IP to the record.
	db.Contact.create( req.body ) 
	.then(  newContact => res.status(201).json(newContact) ) // 201 here is the code for successfull created.
	.catch( err  	 => res.send(err	 ) );
}

exports.getContact = (req, res) => {
	db.Contact.findById( req.params.contactId ) 
	.then(  foundContact => res.json(foundContact) ) // Returns the Contact found
	.catch( err  	 => res.send(err	 ) );
}

exports.updateContact = (req, res) => {
	db.Contact.findOneAndUpdate( {_id: req.params.contactId}, req.body, {new: true} ) // {new: true} here means to return the new version of contact after update. If we do not put this parameter, will be return the last version of customer.
	.then(  updatedContact => res.json(updatedContact) ) // returns the Contact, updated or the old version.
	.catch( err  	 => res.send(err	 ) );
}

exports.deleteContact = (req, res) => {
	db.Contact.remove( {_id: req.params.contactId} ) 
	.then(  deleteStatus => res.json(deleteStatus) ) 
	.catch( err  	 => res.send(err	 ) );
}

module.exports = exports;