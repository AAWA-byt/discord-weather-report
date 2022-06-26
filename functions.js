const express = require("express");
const functions = express();
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'))
const hookcord = require('hookcord');

/*
function for starting the webserver
 */

function start_webserver() {

    const config = JSON.parse(fs.readFileSync('config.json', 'utf8'))

    // start express applicaiton
    functions.listen(config.webapp_port, () => {
        console.log("______________________________________")
        console.log("Webapp started!")
        console.log("Port: " + config.webapp_port)
        console.log("Date: " + new Date())
        console.log("______________________________________")

    });

    functions.use(express.static(__dirname));

// rendering the index.html file
    functions.get("/", (req, res) => {
        res.sendFile(__dirname + "index.html");
    });
}

module.exports = { start_webserver }   // export method for using it in main class



/*
function for sending the discord webhook
 */

function send_webhook(author_name, icon, title, color, field_1_title, field_1_value, field_2_title, field_2_value, field_3_title, field_3_value, field_4_title, field_4_value, field_5_title, field_5_value, field_6_title, field_6_vaule) {

    const Hook = new hookcord.Hook()
    var time = new Date()

    Hook.login(config.username, config.secret);     // login to discord webhook with config data
    Hook.setPayload({
        "embeds": [{
            "title": title,
            "author": {
                name: author_name,
                icon_url: icon
            },
            "color": color,
            "timestamp": time,
            "fields": [
                {
                    "name": field_1_title,
                    "value": field_1_value
                },
                {
                    "name": field_2_title,
                    "value": field_2_value
                },
                {
                    "name": field_3_title,
                    "value": field_3_value
                },
                {
                    "name": field_4_title,
                    "value": field_4_value
                },
                {
                    "name": field_5_title,
                    "value": field_5_value
                },
                {
                    "name": field_6_title,
                    "value": field_6_vaule
                }
            ]
        }]
    })

    Hook.fire()
        .then(response_object => {  })
        .catch(error => {
            throw error;
        })

}

module.exports = { send_webhook }   // export method for using it in main class