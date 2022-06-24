//normal fun
function sayhi(){
    console.log('hi');
}

sayhi();

//fun exp
var saybye=function(){
    console.log('bye');
}

saybye();

//passing through fun into another fun
function callfun(fun){
    fun();
}
var sayhello=function(){
    console.log('hello');
};

callfun(sayhello);