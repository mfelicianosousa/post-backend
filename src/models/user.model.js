const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const DataSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    type_user:{
        type: Number,
        default: 1
    }
   
},  {
    timestamps: true,
});

DataSchema.pre('save', function(next){
    if ( !this.isModified("password") ) {
        return next();
    }
    this.password = bcrypt.hashSync(this.password, 10) ;
    next();
});

module.exports = mongoose.model('User', DataSchema);