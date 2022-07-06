fetch("data.json")
    .then(response => response.json())
    .then(weather_data => {
        console.log(weather_data)
        document.querySelector("#city").innerText = weather_data.city
        document.querySelector('#temp').innerText = weather_data.temp
        document.querySelector('#like').innerText = weather_data.like
        document.querySelector('#vis').innerText = weather_data.vis
        document.querySelector('#clouds').innerText = weather_data.clouds
        document.querySelector('#wind').innerText = weather_data.wind
    })