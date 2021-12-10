// This file is used to
const username = require("os").userInfo().username
const fs = require('fs');

const currentDate = new Date();

fs.writeFile('lastcommit.txt', '"npm run commit" was last ran on: ' + currentDate + ' by: ' + username, function (err) {
  if (err) throw err;
});


