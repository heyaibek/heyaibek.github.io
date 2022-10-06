const path = require('path');
const fs = require('fs');

const posts = path.join(__dirname, 'src/_posts');
const index = path.join(__dirname, 'src/_posts/index.json');

const fetchInfo = (filename) => {
  const parts = filename.split('__');

  const date = new Date(parts[0]);
  const title = parts[1];
  const id = title
    .split(' ')
    .map((word) => word.toLowerCase())
    .join('-');
  const hashtags = parts[2].split(',').map((tag) => {
    if (tag.indexOf('.md') > -1) {
      return tag.replace('.md', '');
    }
    return tag;
  });

  return {
    date: date.toISOString(),
    id,
    title,
    hashtags,
    filename,
  };
};

fs.readdir(posts, (err, files) => {
  if (err) {
    return console.error('unable to scan directory: ', err);
  }

  const data = files.filter((filename) => filename !== 'index.json').map(fetchInfo);

  fs.writeFileSync(index, JSON.stringify(data, null, 2));
});

console.log('invalidating posts...');
