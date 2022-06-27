var http=require('http');
var fs =require('fs');

var server=http.createServer(function(req,res){
    console.log('request was made:'+req.url);

    if(req.url==='/home'||req.url==='/'){
        res.writeHead(200,{'content-type':'text/html'});

        fs.createReadStream(__dirname+'/serving_html2.html').pipe(res);
    }
    else if(req.url==='/contact1'){
        res.writeHead(200,{'content-type':'text/html'});

        fs.createReadStream(__dirname+'/contact1.html').pipe(res);
    }
    else if(req.url==='/api/ninjas'){
        var ninjas=[{name:'ryu',age:29},{name:'aish',age:26}];
        res.writeHead(200,{'content-type':'application/json'});
        res.end(JSON.stringify(ninjas));
    }
    else{
        res.writeHead(404,{'content-type':'text/html'});
        fs.createReadStream(__dirname+'/contact2.html').pipe(res);
    }
});
server.listen(3002, '127.0.0.1');
console.log('yo, listening to port 3000');