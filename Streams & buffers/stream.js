const fs = require('fs');

const readStream = fs.createReadStream('./../The File System/Docs/blog3.txt', {encoding:'utf-8'});
const writeStream = fs.createWriteStream('./../The File System/Docs/blog4.txt')

// readStream.on('data', (chunck) => {
//     console.log('----------NEW CHUNCK-------------');
//     console.log(chunck);
//     writeStream.write('\n -- NEW CHUNCK -- \n');
//     writeStream.write(chunck);
// });

// piping
readStream.pipe(writeStream);