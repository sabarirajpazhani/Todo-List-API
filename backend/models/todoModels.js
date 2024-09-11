const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    task:{
        type:String,
        required: true
    },
    completed:{
        type: Boolean,
        default: false
    },
    created_at:{
        type:Date,
        default: Date.now
    }
});

const todoModel = mongoose.model('Todo', todoSchema);

module.exports = todoModel;