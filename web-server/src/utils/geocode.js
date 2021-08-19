const request = require('postman-request')
const log = (v) => console.log(v)



const geocode = (address, callback) => {
    const url = 'http://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiZmxhbXVyMSIsImEiOiJja3M1dndyZnYyamtwMzJvOWxpdXplNGMwIn0._g76C93gbKR0VbFeMziQpA'
        //log(url)
    request({ url, json: true }, (error, response, body) => {

        if (error) return callback('Something went wrong', undefined)
        if (body.features.length === 0) return callback(`Can't fisnd the place`, undefined)

        callback(undefined, body)
    })
}

module.exports = geocode