require('dotenv').config();
const port = process.env.PORT || 8080;
const rootAPIURL = process.env.ROOT_API_URL || 'pamzcapi';
const express = require("express");
const app = express();
const bodyParser = require("body-parser");


const contactRoutes = require("./routes/Contact");
const requestRoutes = require("./routes/Request");


// To access BODY from requests 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// Router for Contact
app.use(rootAPIURL + "/contacts", contactRoutes);

// Router for Request
app.use(rootAPIURL + "/requests", requestRoutes);

// Root route
app.get("/", (req, res) => {
	res.json("This is the root route.");
})

// Answear for inexistent route.
app.get("*", function(req, res){
	res.json("This page does not exist!");
});


app.listen(port , process.env.IP, function( ){
 	console.log("PAMZCAPI has started at PORT ", process.env.PORT);
});