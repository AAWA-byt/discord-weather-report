const express = require("express");
const app = express();
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'))

function start_webserver() {

    const config = JSON.parse(fs.readFileSync('config.json', 'utf8'))

    // start express applicaiton
    app.listen(config.webapp_port, () => {
        console.log("______________________________________")
        console.log("Webapp started!")
        console.log("Port: " + config.webapp_port)
        console.log("Date: " + new Date())
        console.log("______________________________________")

    });

    app.use(express.static(__dirname));

// rendering the index.html file
    app.get("/", (req, res) => {
        res.sendFile(__dirname + "index.html");
    });
}

module.exports = { start_webserver }   // export method for using it in main class