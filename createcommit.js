// moved from package.json to save syntax
// "commit": "npm run update \n git tag -d $(git tag -l) \nchanged=0 \ngit remote update && git status -uno | grep -q 'Your branch is behind' && changed=1\nif [ $changed = 1 ]; then\n    echo \"***WARNING***\n pull latest\";\nelse\n git-cz\nfi"

// This file is used to
const username = require("os").userInfo().username
const fs = require('fs');

const currentDate = new Date();

fs.writeFile('lastcommit.txt', '"npm run commit" was last ran on: ' + currentDate + ' by: ' + username, function (err) {
  if (err) throw err;
});


