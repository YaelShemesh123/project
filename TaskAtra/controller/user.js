const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const User =require('../models/User')


const getAllUsers = async (req, res) => {
    console.log("---get all users---");
    try {
        let users = await User.find()
        if (users == null) {
            res.send("could not have users");
        }
        return res.json({ status: 200, users: users })
    }
    catch (error) {
        res.status(500).json({ Message: error.message })
    }
}


const newUser = async (req, res) => {
    const { name , age, city, email, phone} = req.body;
    if (!name || !email ) {
        res.status(500).json({ msg: "Please fill in all fields" })
    }
    User.findOne({ email: email }).exec((err, user) => {
        if (user) {
            res.status(500).json({ msg: 'email already registered' });
        } else {
            let NewUser = new User(req.body);
            NewUser.save()
                .then((user) => {
                    res.status(200).json({
                        newUser: user
                    })
                }).catch((error) => {
                    res.status(500).send(error);
                })
           
        }
    })
}


module.exports = {newUser,getAllUsers }
