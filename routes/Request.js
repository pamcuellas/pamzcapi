const express = require("express");
const router = express.Router();
const db 		= require("../models");

const helperRequest = require("../helpers/request");

router.route('/')
	.get (helperRequest.getRequests) 	// List Requests
	.post(helperRequest.createRequest)	// Create a new Request

router.route('/:RequestId"')
	.get   (helperRequest.getRequest) 	// Getting a specific Request
	.put   (helperRequest.updateRequest)// Updating a Request
	.delete(helperRequest.deleteRequest)// Deleting a Request

module.exports = router;
