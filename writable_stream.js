var fs = require('fs')

var myReadStream = fs.createReadStream(__dirname + '/readme.txt','utf8')

// createWriteStream - opens the file and write data in the present file
var myWriteStream = fs.createWriteStream(__dirname+'/writeMe.txt')

myReadStream.on('data', function(chunk){
    console.log('new chunk received : ')
    myWriteStream.write(chunk)
})