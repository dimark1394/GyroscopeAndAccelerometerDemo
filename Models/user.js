var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
    Firstname: {
        type: String,
        required: true
    },
    Lastname: {
        type: String,
        required: true
    },
    Email:{
        type: String,
        required: true
    },
    Height: {
        type: Number,
        required: true
    },
    Weight:{
        type: Number,
        required: true
    },
    Age:{
        type: Number,
        required: true
    },
    Dominant_Hand:{
        type: String,
        required: true
    },
    Username:{
        type: String,
        required: true
    },
    Password:{
        type: String,
        required: true
    }
});

UserSchema.statics.authenticate = function (Username,Password, callback){
    User.findOne({email: Username})
        .exec(function (err,user){
            if (err) {
                return callback(err)
            } else if (!user) {
                var err = new Error('User not found.');
                err.status = 401;
                return callback(err);
            }
            bcrypt.compare(Password, user.Password, function (err, result) {
                if (result === true) {
                    return callback(null, user);
                } else {
                    return callback();
                }
            })
    });
}

