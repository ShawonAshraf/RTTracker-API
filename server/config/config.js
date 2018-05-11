var configJSON = require('./config.json');
var pusherConfigKeys = configJSON['pusher'];

// set env keys for config
Object.keys(pusherConfigKeys).forEach((key) => {
    process.env[key] = configJSON[key];
});