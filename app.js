const {api_request} = require("./functions")
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'))


var executeIntervall = setInterval(function() {     // method for repeating request

    api_request()

}, config.time);  // execute time intervall