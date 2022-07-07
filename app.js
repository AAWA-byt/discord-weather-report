const {api_request, start_webserver} = require("./functions")
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'))

console.log("______________________________________")
console.log("Application started...")
console.log("Name: discord-weather-report")
console.log("Author: AAWA-byt")
console.log(new Date());
console.log("______________________________________")


const executeIntervall = setInterval(function () {
    api_request()
}, config.time);  // execute time interval

if (config.webserver === "true") {
    start_webserver()
} else if (config.webserver === "false") {
    console.log("[WeatherAPI] Webserver is deactivated!")
} else {
    console.log("[WeatherAPI] Config error! Please check 'webserver'")
}