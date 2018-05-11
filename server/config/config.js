var configJSON = require('./config.json');
var pusherConfigKeys = configJSON['pusher'];

Object.keys(pusherConfigKeys).forEach((key) => {
    process.env[key] = configJSON[key];
});