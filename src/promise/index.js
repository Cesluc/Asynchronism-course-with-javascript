const promise = new Promise(function(resolve,reject){
    resolve('hey!')
});

//counting cows
var cows = 15;
cows = 9;

const countCows = new Promise(function(resolve,reject){
    if (cows >10){
        resolve(`We have ${cows} cows in the far`);
    } else {
        reject(`There are no enough cows in the farm`)
    }
});

countCows.then((result)=>{ // when the promise is solved will be executed the function in .then
    console.log(result);
}).catch((error)=>{ // when the promise is rejected will be executed the function in .catch
    console.log(error);
}).finally(()=> console.log(`Finally`)) // After the execution