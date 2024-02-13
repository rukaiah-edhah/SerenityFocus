const express = require('express');
const api = express.Router();
const { Users, Tasks, PomodoroSession } = require('../model/models');
const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

// USER API

api.get("/username", async (req, res) => {
    try {
        const username = await Users.findOne({ username: res.username});

        res.json({ username });
    } catch (err){
        console.error(err);
        res.sendStatus(400);
    }
});


api.post("/post_user", async (req, res) => {
    try {
        // const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const newUser = await Users.create({
            username: req.body.username,
            // Removed fullname and added firstName and lastName to match the database schema
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        })

        req.session.user = {
            _id: newUser._id,
            username: newUser.username,
            email: newUser.email
        }

        // re do in the future for user specific tasks
        const newTask = await tasks.create({
            user: new ObjectId(newUser._id),
            description: req.body.description // -> check this later
        })

        // re do in the future for user specific pomodoro session
        const newPomodoroSession = await pomodoroSession.create({
            user: new ObjectId(newUser._id),
            startTime: req.body.date // -> check this later
        })

        res.json({newUser, newTask, newPomodoroSession});
    } catch (err) {
        console.error(err);
        res.sendStatus(400);
    }
});

api.delete("/delete_user/:id", async (req, res) => {
    try {
        let id = new ObjectId(req.params.id);

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Invalid ObjectId' });
        }

        const deletedUser = await users.findByIdAndDelete(id);
        

        if (!deletedUser) {
            return res.status(404).json({ error: "Data not found"});
        }

        const deletedUserTasks = await tasks.deleteMany({ user: id});
        const deletedPomodoroSession = await pomodoroSession.deleteMany({ user: id});

        res.json({ message: "Data deleted Successfully"});
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});

// TASKS API

api.get("/get_tasks", async (req, res) => {
    try {
        const getTasks = await Tasks.find({});

        res.json(getTasks);
    } catch (err) {
        console.error(err);
        res.sendStatus(400);
    }
});

api.post("/post_tasks/:id", async (req, res) => {
    try {
        let id = new ObjectId(req.params.id);

        if (!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({ error: 'Invalid ObjectId'});
        }

        const findUser = await Tasks.findById(id);

        const newTask = await Tasks.create({
            user: new ObjectId(id),
            description: req.body.description,
            status: req.body.status,
        })

        if (findUser){
            newTask
        }    

        res.json(newTask);
    } catch(err) {
        console.error(err);
        res.sendStatus(400);
    }
});

api.patch("/update_task/:id", async (req, res) => {
    try {
        let id = new ObjectId(req.params.id);

        if (!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({ error: 'Invalid ObjectId'});
        }

        const updateTask = await Tasks.findByIdAndUpdate(id, 
            { description: req.body.description}
        );

        if (!updateTask){
            return res.status(400).json({ error: "Data not found"});
        }

        res.json({ message: "Data updated successfully"});
    } catch (err){
        console.error(err);
        res.sendStatus(400);
    }
})

api.delete("/delete_task/:id", async (req, res) => {
    try {
        let id = new ObjectId(req.params.id);

        if (!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({ error: 'Invalid ObjectId'});
        }

        const deletedTask = await Tasks.findByIdAndDelete(id);

        if (!deletedTask) {
            return res.status(404).json({ error: "Data not found"});
        }

        res.json({ message: "Date deleted successfully"});
    } catch (err){
        console.error(err);
        res.sendStatus(400);
    }
});

// POMODORO SESSION API

api.get("/get_pomodoro_sessions", async (req, res) => {
    try {
        const getPomodoroSession = await PomodoroSession.find({});

        res.json(getPomodoroSession);
    } catch (err) {
        console.error(err);
        res.sendStatus(400);
    }
});

api.post("/post_pomodoro_session", async (req, res) => {
    try {
        const newPomodoroSession = await PomodoroSession.create({
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            defaultDuration: req.body.defaultDuration,
            customDuration: req.body.customDuration,
            sessionType: req.body.sessionType,
            // Removed intention since we no longer have it
        });

        res.json(newPomodoroSession);
    } catch(err) {
        console.error(err);
        res.sendStatus(400);
    }
});

api.delete("/delete_pomodoro_session/:id", async (req, res) => {
    try {
        let id = new ObjectId(req.params.id);

        if (!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({ error: 'Invalid ObjectId'});
        }

        const deletedPomodoroSession = await tasks.findByIdAndDelete(id);

        if (!deletedPomodoroSession) {
            return res.status(404).json({ error: "Data not found"});
        }

        res.json({ message: "Date deleted successfully"});
    } catch (err){
        console.error(err);
        res.sendStatus(400);
    }
});

module.exports = api;