const express 	= require("express");
const router 	= express.Router();
const db 		= require("../models");

const helperContact = require("../helpers/contact");

router.route('/')
	.get (helperContact.getContacts) 	// List Contacts
	.post(helperContact.createContact)	// Create a new Contact

router.route('/:contactId"')
	.get   (helperContact.getContact) 	// Getting a specifi Contact
	.put   (helperContact.updateContact)// Updating a Contact
	.delete(helperContact.deleteContact)// Deleting a Contact

module.exports = router;