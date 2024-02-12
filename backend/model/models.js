const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

// Regular expressions for validation
const nameValidationRegex = /^[a-zA-Z]+(?:['-][a-zA-Z]+)*$/;
const emailValidationRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordValidationRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const timeZoneValidationRegex = /(^[\w\-\+]+\/[\w\-\+]+(?:\/[\w\-\+]+)?$)|(^UTC$|^utc$)/;

mongoose.connect(process.env.MODE === "prod" ? process.env.PROD : process.env.DEV)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("MongoDB connection error: ", err))

    const userSchema = new mongoose.Schema({
        username: {
            type: String,
            required: [true, 'Username is required'],
            index: true,
            minlength: [3, 'Username must be at least 3 characters long'],
            unique: true 
        },
        firstName: {
            type: String,
            required: [true, 'First name is required'],
            trim: true,
            minlength: [2, 'First name must be at least 2 characters long'],
            match: [nameValidationRegex, 'First name contains invalid characters'],
        },
        lastName: {
            type: String,
            required: [true, 'Last name is required'],
            trim: true,
            minlength: [2, 'Last name must be at least 2 characters long'],
            match: [nameValidationRegex, 'Last name contains invalid characters'],
        },
        email: {
            type: String,
            required: true,
            unique: true,
            index: true,
            validate: {
                validator: function (value) {
                  return emailValidationRegex.test(value);
                },
                message: 'Invalid email address format'
            }
        },
        password: {
            type: String,
            required: true,
            validate: {
                validator: function(password) {
                    return passwordValidationRegex.test(password);
                },
                message: 'Password must be at least 8 characters long, including at least one letter, one number, and one special character.'
            }
        },
        salt: {
            type: String,
        },
        hash: {
            type: String,
        },
        // Future Data Points
        timeZone: { // To support localized notifications and reminders
            type: String,
            required: false,
            validate: {
                validator: function(v) {
                    return timeZoneValidationRegex.test(v);
                },
                message: props => `${props.value} is not a valid time zone identifier!`
            },
        },
        preferredLanguage: { // For customizing app language
            type: String,
            required: false,
        },
    }, {timestamps: true });


// Pre-save hook to hash the password
userSchema.pre('save', function(next) {
    // Only hash the password if it has been modified (or is new)
    if (!this.isModified('password')) return next();

    // Generate salt and hash the password
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
        if (err) return next(err);

        bcrypt.hash(this.password, salt, (err, hash) => {
            if (err) return next(err);
            this.password = hash; // Replace the plain text password with the hash
            next();
        });
    });
});


const Users = mongoose.model("Users", userSchema);


const taskSchema = new mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Users',
        index: true,
        required: true
    },
    description: { 
        type: String,
        required: [true, 'Task description is required'],
        trim: true,
        minlength: [5, 'Description must be at least 5 characters long'],
        match: [/.+/, 'Description cannot be empty']
    },
    status: { 
        type: String,
        enum: ['pending', 'completed'],
        default: 'pending'
    },
    // Future Data Points
    category: [{ // To allow categorization and filtering of tasks
        type: String,
        enum: ['Work', 'Personal', 'Health'], // Example set of categories
        required: false,
    }],
    isRecurring: { // To manage recurring tasks without user needing to re-enter them
        type: Boolean,
        default: false,
    },
    dueDate: {
        type: Date,
        required: false, 
    },
}, { timestamps: true });

const pomodoroSessionSchema = new mongoose.Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Users',
        index: true,
        required: true 
    },
    startTime: { 
        type: Date,
        required: true
    },
    endTime: { 
        type: Date,
        required: false
    },
    defaultDuration: { 
        type: Number,
        default: 25,
    },
    customDuration: { 
        type: Number,
        min: [5, 'Custom duration must be at least 5 minutes.'],
        max: [60, 'Custom duration must be no more than 60 minutes.'],
    },
    sessionType: { 
        type: String,
        enum: ['session', 'break']
    },
    // Future Data Points
    taskId: { // To link each session to a specific task
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Tasks",  
    },
    upticks: [{ // To track when the user adds time to a session
        addedTime: Number, 
        uptickTime: Date, 
    }]
}, { timestamps: true });

const Tasks = mongoose.model("Tasks", taskSchema);
const PomodoroSession = mongoose.model("Pomodoro Session", pomodoroSessionSchema);
const connection = mongoose.createConnection(process.env.MODE === "prod" ? process.env.PROD : process.env.DEV); // added for user tracking -> you can edit this later

module.exports = { Users, Tasks, PomodoroSession, connection };