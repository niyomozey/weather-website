const request= require("request")

const geocode = (address, callback) => {
    // const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1Ijoibml5b25rdXJ1bW9pc2UiLCJhIjoiY2txcXEwaXg3MGgxZTJvcTM1N3Fzem8xNiJ9.sDAe8qc_f5GgSBxv0X3tRQ';
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}
// const gcode= (address,callback)=>{
//     const url = " "+address+"";
//     request({url: url,json: true},(error, response)=>{
//         if(error){
//             callback("enable to reach to that service",undefined)
//         } else if(response.body.length==0){
//             callback("unable to find specified destination",undefined)
//         }else{
//             callback(undefined,{
//                 longitude : response.body.
//             })
//         }
//     })
// }
module.exports=geocode;