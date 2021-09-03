const fs = require('fs'); // fs ==> file system

// reading files
// fs.readFile('./Docs/blog1.txt', (err, data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// Write File
// fs.writeFile('./docs/blog1.txt', 'hello world' , () => {
//     console.log('file was written')
// });

//     // if there is no file t]in that name then , it will create a file
// fs.writeFile('./docs/blog2.txt', 'hello again' , () => {
//     console.log('file was written')
// } );

// directories
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('folder created');
    });
} else {
    console.log('The file is exists');
    fs.rmdir('./assets', (err) => {
        if(err){
            console.log(err);
        }
        console.log('folder deleted');
    });
}

// Deleting fiels

if(fs.existsSync('./Docs/deleteme.txt')) {
    fs.unlink('./Docs/deleteme.txt', (err) => {
        if(err){
            console.log(err);
        }
        console.log('file Deleted');
    });
}else {
    
}