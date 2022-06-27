var http = require('http')

var fs = require('fs')

var server = http.createServer(function(req,res){
    console.log('request was made: '+req.url);
    res.writeHead(200,{'content-type':'application/json'});

    var myobj={
        name:'jhon',
        job:'ninja',
        age:29
     };
    
     res.end(JSON.stringify(myobj));
    });

server.listen(3000, '127.0.0.1');
console.log('yo, listening to port 3000');
    