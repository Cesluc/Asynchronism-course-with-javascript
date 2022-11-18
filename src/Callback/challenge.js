// Working with an API
// Necessary to make an npm i xmlhttprequest
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback){
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatechange = function(event){
        if (xhttp.readyState === 4){
            //States:
            //0 not initialized
            //1 loading
            //2 Executed
            //3 interacting
            //4 completed
            if(xhttp.status === 200){
                //200 - Correct request
                // 400 - server problem
                callback(null, JSON.parse(xhttp.responseText));
            }else {
                const error = new Error ('Error'+ urlApi);
                return callback(error, null)
            }
        }
    }
    xhttp.send();
}

//API with ecommerce information
// bring all the producs, select one specific product, show the category 

fetchData(`${API}/products`, function(error1,data1){ // Getting all the list of products
    if (error1) return console.error(error1);
    fetchData(`${API}/products/${data1[0].id}`, function(error2,data2){
        if(error2) return console.error(error2);
        fetchData(`${API}/categories/${data2?.category?.id}`, function(error3,data3){
            if (error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
}); 