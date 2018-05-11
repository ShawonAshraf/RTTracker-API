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

var simulateGPS = (longitude, lattitude, n, timeOut) => {
    // create pusher object
    var pusher = new Pusher(pusherConfig);

    // loop...
    var loopCount = 0;
    var operator = 0.001000;
    var longitude = parseFloat(longitude);
    var lattitude = parseFloat(lattitude);

    var sendToPusher = setInterval(() => {
        loopCount++;

        longitude = parseFloat((longitude + operator).toFixed(decPoint));
        lattitude = parseFloat((lattitude - operator).toFixed(decPoint));

        pusher.trigger('mapCoordinates', 'update', { longitude, lattitude });

        if (loopCount === n) {
            clearInterval(sendToPusher);
        }
        console.log(`longitude = ${longitude} @ ${new Date().getUTCDate()}`)
        console.log(`latitude = ${lattitude} @ ${new Date().getUTCDate()}`)
    }, timeOut);
};

module.exports = {
    simulateGPS
};