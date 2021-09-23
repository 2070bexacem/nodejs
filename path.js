const path = require('path');

// sep returns platform specific seperator
// console.log(path.sep);

//join method joins a sequence of path segments using that platform specific seperator as the limiter and returns a normalized resulting path

const filePath = path.join('/content', 'subfolder', 'test.txt');
// console.log(filePath);

//basename returns basename of the file
const base = path.basename(filePath);
// console.log(base);

// resolve returns a path or path segments and resolves it into an absolute path

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
