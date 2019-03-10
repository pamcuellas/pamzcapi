const express 	= require("express");
const router 	= express.Router();
const db 		= require("../models");


// List Contacts
router.get("/", (req, res) => {
	db.Contact.find() // Here, remember that we are using Promise. That means this code could be different.
	.then(  contacts => res.json(contacts) ) // We should customize the return here to give back just the fields that matters.
	.catch( err  	 => res.send(err	 ) );
});

// Create a new Contact
router.post("/", (req, res) => {
	db.Contact.create( req.body ) 
	.then(  newContact => res.status(201).json(newContact) ) // 201 here is the code for successfull created.
	.catch( err  	 => res.send(err	 ) );
});

// Getting a specifi Contact
router.get("/:contactId", (req, res) => {
	db.Contact.findById( req.params.contactId ) 
	.then(  foundContact => res.json(foundContact) ) // Returns the Contact found
	.catch( err  	 => res.send(err	 ) );
});

// Updating a Contact
router.put("/:contactId", (req, res) => {
	db.Contact.findOneAndUpdate( {_id: req.params.contactId}, req.body, {new: true} ) // {new: true} here means to return the new version of contact after update. If we do not put this parameter, will be return the last version of customer.
	.then(  updatedContact => res.json(updatedContact) ) // returns the Contact, updated or the old version.
	.catch( err  	 => res.send(err	 ) );
});

// Deleting a Contact
router.delete("/:contactId", (req, res) => {
	db.Contact.remove( {_id: req.params.contactId} ) // {new: true} here means to return the new version of contact after update. If we do not put this parameter, will be return the last version of customer.
	.then(  deleteStatus => res.json(deleteStatus) ) // Returns information related to the delete process (ok or not).
	.catch( err  	 => res.send(err	 ) );
});

module.exports = router;