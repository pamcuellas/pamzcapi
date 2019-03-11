const whitelist = process.env.CORS_WHITELIST.split(',');

exports.corsOptions = {
  origin: function(origin, callback) {

  	console.log("whitelist ", whitelist); 
  	console.log("origin ", origin); 

  	if (origin === undefined) { // Origin is undefined when you are on the same server. Check it out later.
	      return callback(null, true)
  	} else if (whitelist === undefined) {
		return callback(new Error('Access not allowed. White List not defined.'));  		
  	} else if (whitelist.indexOf(origin) !== -1) {
	      return callback(null, true)
    } else {
	      return callback(new Error('Access not allowed. Restrict by CORS'));
    }
  }

}

module.exports = exports;
