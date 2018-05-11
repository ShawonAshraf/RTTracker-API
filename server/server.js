// dependencies
const express = require('express');
const pusher = require('pusher');
const bodyparser = require('body-parser');


// init
var app = express();
const port = process.env.PORT || 3000;

// register middlewares
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log('Server running @ PORT ', port);
});