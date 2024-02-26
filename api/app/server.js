const app = require('express')();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Event = require('../Model/Event');
const Wash = require('../Model/Wash');
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
});

app.post('/api/events', async (req, res) => {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json(event);
});

app.get('/api/events/:id', async (req, res) => {
    const event = await Event.findById(req.params.id);
    res.json(event);
});

app.put('/api/events/:id', async (req, res) => {
    const event = await Event.findByIdAndUpdate(req.body._id, req.body, {new: true});
    res.status(200).json(event);

});


app.get('/api/washes', async (req, res) => {
    const wash = await Wash.find();
    res.json(wash);
});

app.post('/api/washes', async (req, res) => {
    if (req.body.name === '' && req.body.address === '') {
        res.status(400).json({error: 'Name and address is required'});
    } else {
        const wash = new Wash(req.body);
        await wash.save();
        res.status(201).json(wash);
    }
});

app.listen(port, (error) => {
    if (error) {
        console.log('Error', error);
    }
    console.log('Server is running on port', port);
});