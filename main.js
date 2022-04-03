const {send_webhook} = require("./Functions/Webhook");
const request = require('request');
const fs = require('fs');
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'))


let apiKey = config.key;
let city = config.city;
let id = config.id;
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&id${id}=&units=metric&lang=de&appid=${apiKey}`  // api request link


var executeIntervall = setInterval(function() {     // method for repeating request

    request(url, function (err, response, body) {

        if (err) {
            console.log('error:', error);
        } else {

            // request data from weather api
            let weather = JSON.parse(body)
            let temp = `${weather.main.temp}`
            let like = `${weather.main.feels_like}`
            let vis = `${weather.visibility}`
            let clouds = `${weather.clouds.all}`
            let wind = `${weather.wind.speed}`

            // input data and send discord webhook
            send_webhook("Weather", "https://w7.pngwing.com/pngs/635/774/png-transparent-cartoon-sun-sun-artwokr-text-smiley-cartoon-sun-thumbnail.png", "Weather report :white_sun_small_cloud:", "1752220",
                "City :classical_building:", city,
                "Current temperatur :thermometer:", temp + " Degree",
                "Feels like :cold_face:", like + " Degree",
                "Visibility :foggy:", vis + "m",
                "Cloudiness :cloud:", clouds + "%",
                "Wind speed :wind_blowing_face: ", wind + "m/s")

        }

        console.log("-----------------------------------------------------------------------------------------------------------")
        console.log("[WeatherAPI] Request was succesfully >> " + new Date());   // log when request is done + date

    });
}, config.time);   // execute every 10 seconds