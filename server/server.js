// dependencies
const express = require('express');
const Pusher = require('pusher');
const bodyparser = require('body-parser');


// init
var app = express();
var pusher = new Pusher(require('./config/config'));
const port = process.env.PORT || 3000;

// register middlewares
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

// routes
//
//  POST simloc
// simulates 20 GPS Coordinates and sends to pusher

app.post('/api/simloc', (req, res) => {
    var loopCount = 0;
    var operator = 0.001000;
    var longitude = parseFloat(req.body.longitude);
    var lattitude = parseFloat(req.body.lattitude);

    var sendToPusher = setInterval(() => {
        loopCount++;

        longitude = parseFloat((longitude + operator).toFixed(7));
        lattitude = parseFloat((lattitude - operator).toFixed(7));

        pusher.trigger('mapCoordinates', 'update', { longitude, lattitude });

        if (loopCount === 20) {
            clearInterval(sendToPusher);
        }
    }, 2000);

    res.status(200).send({ message: 'success', code: 200 });
});

app.listen(port, () => {
    console.log('Server running @ PORT ', port);
});