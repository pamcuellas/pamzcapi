const whitelist = process.env.CORS_WHITELIST;

exports.corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Access tot allowed. Restrict by CORS'));
    }
  }
}

module.exports = exports;
