// dependencies
const express = require('express');
const pusher = require('pusher');
const bodyparser = require('body-parser');

var app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server running @ PORT ', port);
});