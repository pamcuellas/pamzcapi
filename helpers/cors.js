const whitelist = (process.env.CORS_WHITELIST !== undefined) ? process.env.CORS_WHITELIST.split(',') : [];

exports.corsOptions = {
  origin: function(origin, callback) {

  	console.log("whitelist ", whitelist); 
  	console.log("origin ", origin); 

  	if (origin === undefined) { // Origin is undefined when you are on the same server. 
	      return callback(null, true)
  	} else if (whitelist.length === 0) {
		return callback(new Error('Access not allowed. White List not defined.'));  		
  	} else if (whitelist.indexOf(origin) !== -1) {
	      return callback(null, true)
    } else {
	      return callback(new Error('Access not allowed. Restrict by CORS'));
    }
  }

}

module.exports = exports;
