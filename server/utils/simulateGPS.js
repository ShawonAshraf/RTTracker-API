const Pusher = require('pusher');

var pusher = new Pusher(require('./../config/config'));

// round value upto decPoint places
const decPoint = 7;

var simulateGPS = (longitude, lattitude) => {
    var loopCount = 0;
    var operator = 0.001000;
    var longitude = parseFloat(longitude);
    var lattitude = parseFloat(lattitude);

    var sendToPusher = setInterval(() => {
        loopCount++;

        longitude = parseFloat((longitude + operator).toFixed(decPoint));
        lattitude = parseFloat((lattitude - operator).toFixed(decPoint));

        pusher.trigger('mapCoordinates', 'update', { longitude, lattitude });

        if (loopCount === 20) {
            clearInterval(sendToPusher);
        }
    }, 2000);
};

module.exports = {
    simulateGPS
};