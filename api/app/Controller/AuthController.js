const User = require("../Model/User");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const secretKey = 'secret123';

exports.RegisterUser = async (req, res) => {
    const {name, email, password} = req.body;
    try {
        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(400).json({error: 'Email already exists'});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({name, email, password: hashedPassword});
        await newUser.save();
        const token = jwt.sign({email}, secretKey, {expiresIn: '1h'});
        res.json({token});
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({error: 'Internal server error'});
    }
}
exports.LoginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
            const token = jwt.sign({email}, secretKey, {expiresIn: '1h'});
            res.json({token});
        } else {
            res.status(401).json({error: 'Invalid credentials'});
        }
    } catch
        (error) {
        res.status(500).json({error: error.message});
    }
}
exports.ListUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}