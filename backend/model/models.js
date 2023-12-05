const mongoose = require('mongoose');
// let Schema = mongoose.Schema;

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

const users = mongoose.model("Users", userSchema);


const taskSchema = new mongoose.Schema({
    user: { type: mongoose.ObjectId, ref: users},
    description: { type: String},
    status: { type: String},
    dueDate: { type: Date}
});

const pomodoroSessionSchema = new mongoose.Schema({
    user: { type: mongoose.ObjectId, ref: users},
    startTime: { type: Date},
    endTime: { type: Date},
    defaultDuration: { type: Number},
    customDuration: { type: Number},
    sessionType: {type: String},
    intention: { type: String}
})

const tasks = mongoose.model("Tasks", taskSchema);
const pomodoroSession = mongoose.model("Pomodoro Session", pomodoroSessionSchema);

module.exports = { users, tasks, pomodoroSession };