//app.js
const express = require("express");
const app = express();

//GET STATUS ENDPOINT
app.get('/', function (req, res) {
  res.send(`Hello World app v1 is running on ${req.hostname}`)
})

//GET Date ENDPOINT
app.get('/date', function (req, res) {
  var utcDate = new Date()

  var day = utcDate.getDate()
  var month = utcDate.getMonth()+1
  var year = utcDate.getFullYear()

  //Date in month-day-year format
  var todaysDate = `Today's date is ${month}-${day}-${year}`

  res.send(todaysDate)
})


module.exports = app;