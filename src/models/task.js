const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema ({
    'title' : String,
    'description' : String,
    'status': {
        'type' : Boolean,
        'dafault' : false,
    }
});

module.exports = mongoose.model('task', TaskSchema);