var configJSON = require('./config.json');

var PUSHER_APP_ID = configJSON[PUSHER_APP_ID];
var PUSHER_APP_KEY = configJSON[PUSHER_APP_KEY];
var PUSHER_APP_SECRET = configJSON[PUSHER_APP_SECRET];
var PUSHER_APP_CLUSTER = configJSON[PUSHER_APP_CLUSTER];

module.exports = {
    appId: PUSHER_APP_ID,
    key: PUSHER_APP_KEY,
    secret: PUSHER_APP_SECRET,
    cluster: PUSHER_APP_CLUSTER
};