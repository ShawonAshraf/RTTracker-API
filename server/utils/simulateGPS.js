const Pusher = require('pusher');

// load config from ENV

var appId = process.env.appId;
var key = process.env.key;
var secret = process.env.secret;
var cluster = process.env.cluster;

var pusherConfig = {
    appId,
    key,
    secret,
    cluster
};

// round value upto decPoint places
const decPoint = 7;

var simulateGPS = (longitude, latitude, n, timeOut) => {
    // create pusher object
    var pusher = new Pusher(pusherConfig);

    // loop...
    var loopCount = 0;
    var operator = 0.001000;
    long = parseFloat(longitude);
    lat = parseFloat(latitude);

    var sendToPusher = setInterval(() => {
        loopCount++;

        long = parseFloat((long + operator).toFixed(decPoint));
        lat = parseFloat((lat - operator).toFixed(decPoint));

        pusher.trigger('mapCoordinates', 'update', { long, lat });

        if (loopCount === n) {
            clearInterval(sendToPusher);
        }
        console.log(`longitude = ${longitude} @ ${new Date()}`);
        console.log(`latitude = ${latitude} @ ${new Date()}`);
    }, timeOut);
};

module.exports = {
    simulateGPS
};