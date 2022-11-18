// Working with an API
// Necessary to make an npm i xmlhttprequest
const XMLHttpRequest = require('xmlhttprequest');
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback){
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatechange = function(event){
        if (xhttp.readystate === 4){
            //States:
            //0 not initialized
            //1 loading
            //2 Executed
            //3 interacting
            //4 completed
            if(xhttp.status === 200){
                //200 - Correct request
                // 400 - server problem
                callback(null,JSON.parse(xhttp.responseText));
            }
        }else {
            const error = new Error ('Error'+ urlApi);
            return (error, null)
        }
    }
    xhttp.send();
}