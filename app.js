const path = require('path')
const express = require('express')
const publicDirectoryPath = path.join(__dirname+'/public');
const app = express()
const bodyParser = require('body-parser')
const geocode = require(publicDirectoryPath+'/utils/geocode.js');
const forecast = require(publicDirectoryPath+'/utils/forecast.js')

// app.set("view engine","hbs")
app.set("view engine","ejs")
app.use(express.static(publicDirectoryPath))
app.set('views', publicDirectoryPath+"views");
// app.use(bodyParser.urlencoded({extended : false}))
const urlbodyparser = bodyParser.urlencoded({extended : false});
app.use(bodyParser.json())
// console.log(__dirname)
// console.log(path.join(__dirname,'../','public'))
// console.log(__filename)



app.get('',(req, res)=>{
    res.render('index',{
        title: "weather",
        name : "Niyonkuru Moise",
        location : "kigali"
    })
})

app.get('/help',(req, res)=>{
    res.render('help');
})
app.get('/about',(req, res)=>{
    res.render('about')
})
app.get('/testfetch',(req, res)=>{
    res.send({
        name: "niyonkuru moise",
        age: 21,
        gender : "male",
        nationality: "rwandan",
        dob : "2020-20-11"
    })
})

app.get('/weather',(req,res)=>{
    geocode(req.query.address, (error, {location})=>{
        console.log(error)
        if(error){
            res.send({error})
        }
        forecast(req.query.address,(error, forecastdata)=>{
            console.log(error)
            if(error){
                res.send({error})
            }
            res.send({
                Address : req.query.address,
                forecast : forecastdata,
                Location : location,
                // latitude : latitude,
                // longitude : longitude
            })
        })
    })
})

app.listen(8087,()=>{
    console.log(__dirname)
    console.log(publicDirectoryPath)
    console.log('server connected.....')
})