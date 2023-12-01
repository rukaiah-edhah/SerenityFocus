const mongoose = require('mongoose');

// insert schema later
mongoose.connect(process.env.DEV)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("MongoDB connection error: ", err))

const userSchema = new mongoose.Schema({
    username: { type: String},
    fullname: { type: String},
    email: { type: String},
    password: { type: String}
});

const Users = mongoose.model("Users", userSchema);
module.exports = Users;