# discord-weather-report
A Node JS application that sends a weather report to a discord webhook and fires up a website to quickly look up the weather data.

![2022-03-27 18_54_49-test - Discord](https://user-images.githubusercontent.com/76434239/160295729-e75cb5e2-687c-4206-bf15-7c84347184d0.png)

![2022-07-07 00_29_25-Discord Weather Report – Opera](https://user-images.githubusercontent.com/76434239/177654158-f97a9115-c1ab-4c79-843c-ee2c819a4e70.png)




# Getting Started
## Requirements
- [Node.js](https://nodejs.org/en/download/)
- [openweathermap](https://openweathermap.org) Account and API Key
- Discord Webhook
- A city of your choice (id)

Install Node.js on your device, create an webhook on your discord server and 
create an free account on https://openweathermap.org/ and generate an API Key (this project is using the api version 2.5).

## Discord Webhook

![2022-03-27 19_03_31-test - Discord](https://user-images.githubusercontent.com/76434239/160295775-ec73426a-921c-4c15-82e3-63e746c3397f.png)

## openweathermap

![2022-03-27 19_00_15-Members – Opera](https://user-images.githubusercontent.com/76434239/160295792-e9e5ac39-8898-4ee9-b694-3c30dcba64f0.png)

## Clone project

Clone the project on your device and open the *config.json*. Put in the discord webhook (discord.com/api/webhooks/*username*/**secret**)your API Key, city name and the city id. 
You can find the citys on https://openweathermap.org and the id in the website url. Now you only need to choose an intervall how often the application 
sends the data to the webhook (e.g. *1.000* is one second and *3.600.000* is an hour). After that you can run the **app.js** with Node.js.

![2022-03-27 19_13_09-Сurrent weather and forecast - OpenWeatherMap – Opera](https://user-images.githubusercontent.com/76434239/160296018-b4b0d9bc-e1ef-4913-8c40-453ecb6da670.png)

![2022-03-27 19_17_12-webscraper-discordwebhook – config json](https://user-images.githubusercontent.com/76434239/160295859-afebe9a8-04b0-41ff-b835-fd37ee143194.png)

## Notice
You can visit the website with the following adress: "**ip or domain of the device where the project is running**:*port*".
If you are running the project on your own local device you can visit the website like this "**localhost**:*port*".


# Authors
- AAWA-byt

# License
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/AAWA-byt/discord-weather-report/blob/main/LICENSE) file for details.
