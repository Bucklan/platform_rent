require("dotenv").config();
const app = require('express')();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthController = require("./Controller/AuthController");
const WashController = require("./Controller/WashController");
const {verifyToken} = require("./Middleware/EnsureTokenIsValid");
const {createWash} = require("./Middleware/EnsureCreateWashValidate");

const port = 4444;
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://admin:wwwwww@cluster0.4kuzydd.mongodb.net/events')
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error', err));


app.get('/', (req, res) => {
    res.send('Hello');
});


// Washes

app.get('/api/washes', WashController.index);
app.post('/api/washes', createWash, WashController.store);
app.delete('/api/washes/:id', WashController.delete);

// auth
app.post('/api/register', AuthController.RegisterUser);
app.get('/api/users', AuthController.ListUsers);
app.post('/api/login', AuthController.LoginUser);


app.get('/protected', verifyToken, (req, res) => {
    res.json({message: 'Protected route accessed successfully'});
});
app.listen(port, (error) => {
    if (error) {
        console.log('Error', error);
    }
    console.log('Server is running on port', port);
});