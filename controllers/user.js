const User = require("../models/User");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


const signup = async(req,res)=>{
    try {
        const { name, email, password } = req.body;
        const payload = req.body;
        const hashedPassword = await bcrypt.hash(password, 12);
        payload.password = hashedPassword;
        const userData = new User(payload);
        const saveData = await userData.save();
        const token = jwt.sign({
            email: saveData.email,
            id: saveData._id,
        }, "jwtexter");

        res.status(201).send({
            user: saveData,
            token: token
        });

    } catch (error) {
        res.status(400).send({
            message: "Invalid credentials"
        })
    }
}

const getTask = async(req,res)=>{
    try {
        const data = await Task.find();
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({
            error : error.message,
            stack : error.stack
        })
    }
}

module.exports = {
signup,
getTask,

}