const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
	firstname: { 
		type: String,
		required: 'First Name cannot be blank!'
	},
	lastname: { 
		type: String,
		required: 'Last Name cannot be blank!'
	},
	email: { 
		type: String,
		required: 'Email cannot be blank!'
	},
	message: { 
		type: String,
		required: 'Message cannot be blank!' 
	},
	ip: { 
		type: String,
		required: 'IP cannot be blank!' 
	},
	created_at: { 
		type: Date, 
		default: Date.now() 
	},
	authorization: { 
		type: String 
	},
	authentication: { 
		type: String 
	}
}); 

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
