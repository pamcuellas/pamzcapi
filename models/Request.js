const mongoose = require("mongoose");

var requestSchema = new mongoose.Schema ({
	'resource':					String,
	'ip':						String,
	'host':  					String,
	'connection':   			String,
	'pragma':      				String,
	'cache-control':  			String,
	'upgrade-insecure-requests':String,
	'user-agent':   			String,
	'accept': 					String,
	'accept-encoding':   		String,
	'accept-language':   		String,
	'created_at': { 
		type: Date, 
		default: Date.now() 
	}
});

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;
