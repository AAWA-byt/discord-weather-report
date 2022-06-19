const express = require("express");
const fs = require('fs');
const app = express();

function start() {

    const config = JSON.parse(fs.readFileSync('config.json', 'utf8'))

    // start express applicaiton
    app.listen(config.webapp_port, () => {
        console.log("Webapp started!")
        console.log("Port" + config.port)
        console.log("Date: " + new Date())

    });

    app.use(express.static(__dirname));

// rendering the index.html file
    app.get("/", (req, res) => {
        res.sendFile(__dirname + "index.html");
    });

}


module.exports = { start }   // export method for using it in main class