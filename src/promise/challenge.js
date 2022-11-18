// needed to instal node fetch in the temrinal (npm i node-fetch)
import fetch from 'node-fetch'; //Fetch by default is a promise
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi){
    return fetch(urlApi);
};

// fetchData(`${API}/products`)
//     .then(response => response.json())
//     .then(products =>{
//         console.log(products);
//     })
//     .then(()=>{
//         console.log('Hola')
//     })
//     .catch(error => console.log(error));

fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products);
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(response => response.json())
    .then(product => {
        console.log(product.title);
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name);
    })
    .catch(err => coonsole.log(err))
    .finally(()=> console.log('Finally'));