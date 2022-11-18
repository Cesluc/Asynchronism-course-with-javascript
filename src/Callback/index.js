// Sum 2 elements
function sum(num1,num2){
    return num1 + num2;
}

function calc(num1, num2, callback){
    return callback(num1, num2);
};

console.log(calc(2,2, sum));

/// --

setTimeout(function(){
    console.log('Hello Javascript')
},5000)

//--

function gretting(name){
    console.log(`Hello ${name}`)
}

setTimeout(gretting, 2000, 'Cesar');