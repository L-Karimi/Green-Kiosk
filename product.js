// let fetch=require("node-fetch2")

fetch('http://localhost:5000/products')
.then(function(response) {
    return response.json();
})
.then(function(items) {
 console.log(items);

let greens = document.getElementById('products')
items.forEach(y => {
    let itemsList = document.createElement('li')
    itemsList.innerText = `${y.name}`
    greens.appendChild(itemsList)
})
})
.catch(function(error){
 console.log('error',error);
});