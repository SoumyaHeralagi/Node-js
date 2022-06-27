var express =require('express');
var app=express();
app.set('view engine','ejs');
app.get('/',function(req,res){
    res.send('this is the home page');
});
app.get('/contact1',function(req,res){
    res.send('this is the contact page');
});
app.get('/profile/:name',function(req,res){
    res.render('profile');
});
app.listen(3000);
