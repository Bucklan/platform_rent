const app = require('express')();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Event = require('../model/Event');
// const { body, validationResult } = require('express-validator');

// const validateTodo = [
//     body('title').().withMessage('Task cannot be empty'),
//     body('date').isIn(['high', 'medium', 'low']).withMessage('Invalid priority level'),
//     (req, res, next) => {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({ errors: errors.array() });
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
});

app.post('/api/events', async (req, res) => {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json(event);
});

app.listen(port, (error) => {
    if (error) {
        console.log('Error', error);
    }
    console.log('Server is running on port', port);
});