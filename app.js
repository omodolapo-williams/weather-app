  const request = require ('request')

  const dotenv= require('dotenv').config()

  const url= `http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=Nigeria,Lagos&aqi=no`

  request (url,(error, response, body)=>{

    const data= JSON.parse(body);
       console.log(data);
   })
