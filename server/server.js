// define local or production env
var env = process.env.NODE_ENV || 'local';
if (env == 'local') {
    // load config
    require('./config/config');
}

// dependencies
const express = require('express');
const bodyparser = require('body-parser');


// utils
var { simulateGPS } = require('./utils/simulateGPS');

// init
var app = express();
const port = process.env.PORT || 3000;

// register middlewares
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

// routes
//
//  POST simloc
// simulates n GPS Coordinates and sends to pusher

app.post('/api/simloc', (req, res) => {
    var longitude = req.body.longitude;
    var latiude = req.body.latitude;
    var timeOut = 2000; // in ms
    var n = 20; // we simulate 20 coordinates for now

    console.log(req.body);

    simulateGPS(longitude, latiude, n, timeOut);

    res.status(200).send({ message: 'success', code: 200 });
});

//
// GET index
app.get('/', (req, res) => {
    res.send({
        message: 'RT Tracker API Index',
        github: 'https://github.com/ShawonAshraf/RTTracker-API'
    });
});

app.listen(port, () => {
    console.log('Server running @ PORT ', port);
});

module.exports = { app };