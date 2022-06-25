var http=require('http');

var server=http.createServer(function(req,res){
    console.log('req was made:'+req.url);
    res.writeHead(200,{'count-Type':'texr/plain'});
    res.end('hey ninjas');
});

server.listen(3000,'127.0.0.1');
console.log('hi, now listening to the port 3000');