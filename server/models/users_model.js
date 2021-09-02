var mongoose = require('mongoose');

var usersSchema = mongoose.Schema({
    strFirstName: { type: String, required: true },
    strLastName: { type: String, required: true },
    strEmail: { type: String, required: true },
    strPassword: { type: String, required: true },
    strUserRole: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
}, { versionKey: false });

module.exports = mongoose.model('UsersTable', usersSchema);