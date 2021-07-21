const request = require("request")


    const forecast = (address, callback) => {
        // const url = 'http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=' + latitude + ',' + longitude + '&units=f'
        
        const url = 'http://api.weatherstack.com/current?access_key=774a5d377f4a3fb0c7d423845ebb281e&query='+address+'';

        request({ url: url, json: true }, (error, response) => {
            if (error) {
                callback('Unable to connect to weather service!', undefined)
            } else if (response.body.error) {
                callback('Unable to find location', undefined)
            } else {
                callback(undefined, response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out.")
            }
        })
    }
module.exports = forecast;
