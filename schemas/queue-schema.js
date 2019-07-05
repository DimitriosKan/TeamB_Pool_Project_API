//import mongoose using the require module
var mongoose = require('mongoose')

//define the schema for the match queue table
exports.QueueSchema = mongoose.Schema({
    playerOneID: {
        type: String, 
        required: true
    },
    playerTwoID: {
        type: String,
        required: true
    },
    inPlay: { //only to be true whilst the game described is active, once finished, it will become false
        type: Boolean,
        required: true
    }
});

exports.queueModel = mongoose.model("Queue", this.QueueSchema);