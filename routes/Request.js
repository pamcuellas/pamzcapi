const express = require("express");
const router = express.Router();
const db 		= require("../models");

// // List Requests
// router.get("/", (req, res) => {
// 	db.Request.find() // Here, remember that we are using Promise. That means this code could be different.
// 	.then(  requests => res.json(requests) )
// 	.catch( err  	 => res.send(err	 ) );
// });

// // Create a new Request
// router.post("/", (req, res) => {
// 	db.Request.create( req.body ) 
// 	.then(  newRequest => res.status(201).json(newRequest) ) // 201 here is the code for successfull created.
// 	.catch( err  	 => res.send(err	 ) );
// });


const helperRequest = require("../helpers/request");

router.route('/')
	.get (helperRequest.getRequests) 	// List Requests
	.post(helperRequest.createRequest)	// Create a new Request

router.route('/:RequestId"')
	.get   (helperRequest.getRequest) 	// Getting a specific Request
	.put   (helperRequest.updateRequest)// Updating a Request
	.delete(helperRequest.deleteRequest)// Deleting a Request

module.exports = router;
