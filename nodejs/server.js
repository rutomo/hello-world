//server.js
const app = require("./app");

var PORT  = process.env.PORT || 8080

app.listen(PORT, function() {
  console.log('Listening at http://%s:%s', 'localhost', PORT);
});
