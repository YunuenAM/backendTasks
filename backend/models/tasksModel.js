const mongoose = require ('mongoose')

const taskSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please type the description of the task']
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Task', taskSchema )