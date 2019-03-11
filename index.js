require('dotenv').config();
const rootAPIURL 	= process.env.ROOT_API_URL || 'pamzcapi';
const PORT 			= process.env.PORT || 8080;
const express 		= require("express");
const app 			= express();
const bodyParser 	= require("body-parser");
const cors 			= require('cors');

const contactRoutes = require("./routes/Contact");
const requestRoutes = require("./routes/Request");
const corsOptions 	= require("./helpers/cors");

// To access BODY from requests 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Router for Contact
app.use(rootAPIURL + "/contacts", cors(corsOptions), contactRoutes);

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


app.listen(PORT , process.env.IP, function( ){
 	console.log("PAMZCAPI has started at PORT ", PORT);
});
