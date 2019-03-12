const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
	firstname: { 
		type: String,
		required: 'cannot be blank!'
	},
	lastname: { 
		type: String,
		required: 'cannot be blank!'
	},
	email: { 
		type: String,
		required: 'cannot be blank!'
	},
	message: { 
		type: String,
		required: 'cannot be blank!' 
	},
	ip: { 
		type: String
	},
	created_at: { 
		type: Date, 
		default: Date.now() 
	},
	'recaptcha-token': { 
		type: String, 
		required: ' was not provided!' 
	},
	authentication: { 
		type: String 
	}
}); 

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
