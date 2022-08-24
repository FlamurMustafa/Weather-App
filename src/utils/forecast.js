const request = require('postman-request')

const forecast = (data, callback) => {

    const url = `http://api.weatherstack.com/current?access_key=2eb4fbc4b408b45efb2d5cd737c41d8d&query=` + data[1] + ',' + data[0];

    //log(url)
    request({ url, json: true }, (error, response, body) => {

        if (error) return callback('Something went wrong', undefined)
        if (response.body.error) return callback(`Can't find the place`)

        callback(undefined, body)
    })
}

module.exports = forecast