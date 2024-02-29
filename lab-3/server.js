const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:wwwwww@cluster0.4kuzydd.mongodb.net/lab')
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error', err));

const userSchema = new mongoose.Schema({
    Entity: String,
    Code: Number,
    Year: Number,
});

const User = mongoose.model('User', userSchema);

// User.createIndexes({ Year: 1, Code: 1 })
//     .then(() => console.log('Index created'))
//     .catch(error => console.log(error));
console.log("-------sort by entity--------")
User.createIndexes({})
    .then(() => {
        console.log('Index created successfully');
        User.find({ Entity: "Afghanistan"}).explain(function(err, explanation) {
            if (err) {
                console.error('Error executing explain:', err);
            } else {
                console.log('Explain after index:', explanation);
            }
        });
    })
    .catch(error => console.log(error));

console.log("-------find only entity--------")

User.find({ Entity: "Afghanistan" }).explain(function(err, explanation) {
    if (err) {
        console.error('Error executing explain:', err);
    } else {
        console.log('Explain result:', explanation);
    }
});




console.log("-------group by--------")

User.aggregate([
    {
        $group : {
            _id : "$year",
            count: { $sum: 1 }
        }
    }
]).then(result => console.log(result));

console.log("-------sort--------")

User.aggregate([
    {
        $sort : { Year : -1 }
    },
    {
        $project : { Year : 1 }
    }
]).then(result => console.log(result));

console.log("-------group by--------")

User.aggregate([
    {
        $group: {
            _id: null,
            avgYear: { $avg: "$Year" },
            minYear: { $min: "$Year" },
            maxYear: { $max: "$Year" }
        }
    }
]).then(result => console.log(result));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
