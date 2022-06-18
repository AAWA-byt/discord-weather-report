const express = require("express");
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'))
const app = express();

function start() {

    // start express applicaiton
    app.listen(config.port, () => {
        console.log("Webapp started!")
        console.log("Port" + config.port)
        console.log("Date: " + new Date())

    });

    app.use(express.static(__dirname));

// rendering the index.html file
    app.get("/", (req, res) => {
        res.sendFile(__dirname + "/webapp/index.html");
    });

}


module.exports = { start }   // export method for using it in main class