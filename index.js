const express = require("express");

const app = express();
const port = process.env.PORT || 4000;

// TODO - Write a get request using path "/" that will return response with the status code 200 and json message 'This is a first request.'"

// TODO - Write a get request using path "/second" that will return response with the status code 200 and json message 'This is a second request.'"

// TODO - Write a get request using path "/third" that will return response with the status code 200 and json message 'This is a third request.'"

module.exports = app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);