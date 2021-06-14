const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    age: {
        type: String,   
    },
    city: {
        type: String,   
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
    },
})

module.exports = mongoose.model('User', UserSchema)

