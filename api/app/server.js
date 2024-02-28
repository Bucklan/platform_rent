const app = require('express')();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Event = require('../Model/Event');
const Wash = require('../Model/Wash');
const User = require('../Model/User');
// const {body, validationResult} = require('express-validator');

// const createValidateEvent = [
//     body('title', 'title must min 3 size word').isLength({min: 3}),
//     body('date', 'date must more 1950 and little now year').isInt({min: 1950, max: now_year.getFullYear()}),
//     body('date', 'date must more 1950 and little now year').isDate(/*{}*/),
//     (req, res, next) => {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({errors: errors.array()});
//         }
//         next();
//     },
// ];


const port = 4444;
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://admin:wwwwww@cluster0.4kuzydd.mongodb.net/events')
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error', err));


app.get('/', (req, res) => {
    res.send('Hello');
});

app.get('/api/events', async (req, res) => {
    const events = await Event.find();
    res.send(events);
});//index

app.post('/api/events', async (req, res) => {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json(event);
});//store

app.get('/api/events/:id', async (req, res) => {
    const event = await Event.findById(req.params.id);
    res.json(event);
});//show

app.put('/api/events/:id', async (req, res) => {
    const event = await Event.findByIdAndUpdate(req.body._id, req.body, {new: true});
    res.status(200).json(event);
});//update


app.get('/api/washes', async (req, res) => {
    const wash = await Wash.find();
    res.json(wash);
});//index

app.post('/api/washes', async (req, res) => {
    if (req.body.name === '' && req.body.address === '') {
        res.status(400).json({error: 'Name and address is required'});
    } else {
        const wash = new Wash(req.body);
        await wash.save();
        res.status(201).json(wash);
    }
});//store

app.delete('/api/washes/:id', async (req, res) => {
    await Wash.findByIdAndDelete(req.params.id);
    res.status(200).json({'message': 'ok'});
});//delete


app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

app.post('/api/register', async (req, res) => {
    const {name, email, password} = req.body;
    try {
        const existingUser = await User.findOne({email});
        if (existingUser) {
            return res.status(400).json({error: 'Email already exists'});
        }

        // Create a new user document
        const newUser = new User({name, email, password});

        // Save the user to the database
        await newUser.save();

        res.json({message: 'Registration successful', user: newUser});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

app.post('/api/login', async (req, res) => {
    try {
        const {email, password} = req.body;

        // Find user by email
        const user = await User.findOne({email});

        // Check if the user exists and the password is correct
        if (user && user.password === password) {
            res.json({message: 'Login successful', user});
        } else {
            res.status(401).json({error: 'Invalid credentials'});
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

app.listen(port, (error) => {
    if (error) {
        console.log('Error', error);
    }
    console.log('Server is running on port', port);
});