const express = require('express');
const api = express.Router();
const models = require('../model/models');
const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');


api.get("/get_data", async (req, res) => {
    try {
        const getUsers = await models.find({});

        // const userWithoutPass = {
        //     ...getUsers.toObject(),
        //     password: undefined
        // }

        res.json(getUsers);
    } catch (err){
        console.error(err);
        res.sendStatus(400);
    }
});


api.post("/post_data", async (req, res) => {
    try {
        
        const newUser = await models.create({
            username: req.body.username,
            fullname: req.body.fullname,
            email: req.body.email,
            password: req.body.password
        })

        res.json(newUser);
    } catch (err) {
        console.error(err);
        res.sendStatus(400);
    }
});

api.delete("/delete_data/:id", async (req, res) => {
    try {
        let id = new ObjectId(req.params.id);

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Invalid ObjectId' });
        }

        const deletedUser = await models.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ error: "Data not found"});
        }

        res.json({ message: "Data deleted Successfully"});
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});

module.exports = api;