
const request = require('request')
const express = require('express')
const prompt = require('prompt-sync')()
const app = express()
// http://api.weatherstack.com/current
// ? access_key = 774a5d377f4a3fb0c7d423845ebb281e
// & query = kigali;

// const name = prompt('Who are you ')
// console.log('gotta u ${name}',name)

const url = 'http://api.weatherstack.com/current?access_key=774a5d377f4a3fb0c7d423845ebb281e&query=kigali'

const mapbox='https://api.mapbox.com/geocoding/v5/mapbox.places/kigali.json?access_token=pk.eyJ1Ijoibml5b25rdXJ1bW9pc2UiLCJhIjoiY2txcXEwaXg3MGgxZTJvcTM1N3Fzem8xNiJ9.sDAe8qc_f5GgSBxv0X3tRQ'

// request({url : url},(error, response)=>{
//     const data = JSON.parse(response.body)
//     console.log(data.current)
// })

request({url:mapbox},(error, response)=>{
    if(error){
        console.log('Unable to connect to location')
    }else{
        const data = JSON.parse(response.body)
        const latitude = data.features[0].center[0]
        const longitutide = data.features[0].center[1]
        console.log('latitude : '+latitude+', longitutide : '+longitutide)        
    }

}) 


// app.get('/weatherInfo',(url, res)=>{
//     const data = JSON.parse(res.body)
//     console.log(data)
//     return res.json(data)
// })
// app.get('/Info',(req, res)=>{
//     console.log('weather information')
// })

// app.listen(1111)