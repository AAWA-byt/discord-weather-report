const fs = require('fs');
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'))
const hookcord = require('hookcord');
const request = require('request');
const path = require('path');
const express = require("express");
const app = express();

/*
function for sending the discord webhook
 */

function send_webhook(author_name, icon, title, color, field_1_title, field_1_value, field_2_title, field_2_value, field_3_title, field_3_value, field_4_title, field_4_value, field_5_title, field_5_value, field_6_title, field_6_vaule) {

    const Hook = new hookcord.Hook()
    const time = new Date();

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
        .then(() => {  })
        .catch(error => {
            throw error;
        })
}


/*
function for api request
 */

function api_request() {

    let apiKey = config.key;
    let city = config.city;
    let id = config.id;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&id${id}=&units=metric&lang=de&appid=${apiKey}`  // api request link

        request(url, function (err, response, body) {

            if (err) {
                console.log('error:', err);
            } else {

                // request data from weather api
                let weather = JSON.parse(body)
                let temp = `${weather.main.temp}`
                let like = `${weather.main.feels_like}`
                let vis = `${weather.visibility}`
                let clouds = `${weather.clouds.all}`
                let wind = `${weather.wind.speed}`

                // input data and send discord webhook
                if (config.discord === "true") {
                    send_webhook("Weather", "https://w7.pngwing.com/pngs/635/774/png-transparent-cartoon-sun-sun-artwokr-text-smiley-cartoon-sun-thumbnail.png", "Weather report :white_sun_small_cloud:", "1752220",
                        "City :classical_building:", city,
                        "Current temperature :thermometer:", temp + " Degree",
                        "Feels like :cold_face:", like + " Degree",
                        "Visibility :foggy:", vis + "m",
                        "Cloudiness :cloud:", clouds + "%",
                        "Wind speed :wind_blowing_face: ", wind + "m/s")

                } else if (config.webserver === "false") {
                    console.log("[WeatherAPI] Discord is deactivated!")
                } else {
                    console.log("[WeatherAPI] Config error! Please check 'discord'")
                }

                const raw_data = {
                    city: "" + config.city,
                    temp: "" + temp,
                    like: "" + like,
                    vis: "" + vis,
                    clouds: "" + clouds,
                    wind: "" + wind
                }

                // write data from api request into json file
                const data = JSON.stringify(raw_data);
                fs.writeFile('./public/data.json', data, err1 => {
                    if (err1) {
                        console.log('[WeatherAPI] Error writing file', err1)
                    } else {
                        console.log('[WeatherAPI] Successfully wrote file')
                    }
                })
            }

            console.log("[WeatherAPI] Request was successfully >> " + new Date());
        });
}


/*
function for starting the webserver
 */

function start_webserver() {

    const config = JSON.parse(fs.readFileSync('config.json', 'utf8'))

    app.use(express.static(path.join(__dirname, 'public')));

    // start express application
    app.listen(config.port, () => {
        console.log("Webapp started!")
        console.log("Port: " + config.port)
        console.log("Date: " + new Date())
        console.log("______________________________________")

    });

// rendering the index.html file
    app.get('/', (req, res) => {
        res.sendFile(`${__dirname}/public/index.html`);
    });
}

module.exports = { start_webserver, api_request, send_webhook }   // export method for using it in main class