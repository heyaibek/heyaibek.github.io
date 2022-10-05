const path = require("path");
const fs = require("fs");

const posts = path.join(__dirname, "src/_posts");
const index = path.join(__dirname, "src/_posts/index.json");

fs.readdir(posts, (err, files) => {
  if (err) {
    return console.error('unable to scan directory: ', err);
  }
  const filenames = files.filter(filename => filename !== 'index.json');
  fs.writeFileSync(index, JSON.stringify(filenames));
});

console.log('invalidating posts...');
