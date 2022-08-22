// let fetch=require("node-fetch2")

fetch("http://localhost:5000/products")
  .then(function (response) {
    return response.json();
  })
  .then(function (greenItems) {
    console.log(greenItems);

    let greenItem = document.getElementById("products");
    greenItems.forEach((g) => {
      let productsList = document.createElement("li");
      productsList.innerText = `${g.name}`;
      greenItem.appendChild(productsList);
    });
  })
  .catch(function (error) {
    console.log("error", error);
  });
fetch("http://localhost:5000/products/fruits")
  .then(function (response) {
    return response.json();
  })
  .then(function (fruitItems) {
    console.log(fruitItems);

    let fruitItem = document.getElementById("fruList");
    fruitItems.forEach((w) => {
      let myList = document.createElement("li");
      myList.innerText = `${w.name}`;
      fruitItem.appendChild(myList);
    });
  })
  .catch(function (error) {
    console.log("error", error);
  });
fetch('http://localhost:5000/products/vegetables')
.then(function(response) {
    return response.json();
})
.then(function(veges) {
 console.log(veges);

let vege = document.getElementById('vegList')
veges.forEach(p => {
    let myItems = document.createElement('li')
    myItems.innerText = `${p.name}`
    vege.appendChild(myItems)
})
})
.catch(function(error){
 console.log('error',error);
});
