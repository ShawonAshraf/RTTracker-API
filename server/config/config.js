var configJSON = require('./config.json');

var appId = configJSON['PUSHER_APP_ID'].toString();
var key = configJSON['PUSHER_APP_KEY'].toString();
var secret = configJSON['PUSHER_APP_SECRET'].toString();
var cluster = configJSON['PUSHER_APP_CLUSTER'].toString();

module.exports = {
    appId,
    key,
    secret,
    cluster
};