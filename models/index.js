// Mongo Connection Process
const mongoose = require("mongoose");
mongoose.set('debug', true);

// Mondo Data Connection.
const USER	=process.env.MONGO_USER;
const PW	=process.env.MONGO_PW;
const CS	=process.env.MONGO_CS;
const DB	=process.env.MONGO_DB;
const str   = "mongodb+srv://" + USER + ":" + PW + "@" + CS + "/" + DB + "?retryWrites=true";

console.log("connecting......");
// Connecting
mongoose.connect(str, { useNewUrlParser: true });

mongoose.Promise = Promise;

module.exports.Contact = require("./Contact");
module.exports.Request = require("./Request");