var express =require('express');
var app=express();
app.get('/',function(req,res){
    res.send('this is the home page');
});
app.get('/contact1',function(req,res){
    res.send('this is the contact page');
});
app.listen(3000);
