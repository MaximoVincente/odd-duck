'use strict';


let productContainer = document.querySelector('section');
let resultButton = document.getElementById('my_button');
let countSpan = document.getElementById('count')
let image1 = document.getElementById('img1');
let image2 = document.getElementById('img2');
let image3 = document.getElementById('img3');
let myButton = document.getElementById('count');
let clicks = 0;
let maxClicks = 25;
let uniquePhoto =[];

function Product (name, src){
this.name = name;
this.src = src;
this.views = 0;
this.clicks = 0; 
Product.allProductsArray.push(this);
}

Product.allProductsArray = [];

function getRandomNumber(){
    return Math.floor(Math.random() * Product.allProductsArray.length);
}

function renderProducts(){
    let product1 = getRandomNumber();
    let product2 = getRandomNumber();
    let product3 = getRandomNumber();
    


    while (product1 === uniquePhoto.includes(product1,product2,product3)){
    product1 = getRandomNumber();
}
    while (product2 === uniquePhoto.includes(product1,product2,product3)) {
    product2 = getRandomNumber();
}
    while (product3 === uniquePhoto.includes(product1,product2,product3)) {
    product3 = getRandomNumber();
}

uniquePhoto = [product1, product2, product3];
console.log(uniquePhoto);

image1.src = Product.allProductsArray[product1].src;
image2.src = Product.allProductsArray[product2].src;
image3.src = Product.allProductsArray[product3].src;
image1.alt = Product.allProductsArray[product1].name;
image2.alt = Product.allProductsArray[product2].name;
image3.alt = Product.allProductsArray[product3].name;

Product.allProductsArray[product1].views++;
Product.allProductsArray[product2].views++;
Product.allProductsArray[product3].views++;
}


function handleProductClick(event){

    clicks++
    let clickProduct = event.target.alt;
    for (let i = 0; i < Product.allProductsArray.length; i++){
        if (clickProduct === Product.allProductsArray[i].name){
            Product.allProductsArray[i].clicks++;
            break;
        }
    }

    if (clicks === maxClicks){
        productContainer.removeEventListener('click', handleProductClick);
        resultButton.addEventListener('click', renderResults);
        alert('Max votes submitted. Check Results');
    }else{
        renderProducts();
    }
}

function renderResults(){
    let ul = document.querySelector('ul');
    for (let i = 0; i < Product.allProductsArray.length; i++){
        let li = document.createElement('li');
        li.textContent = `${Product.allProductsArray[i].name}: ${Product.allProductsArray[i].views} Views and ${Product.allProductsArray[i].clicks} Votes.`;
        ul.appendChild(li);
    }
    displayChart();
}



new Product('Bag', 'assets/bag.jpeg');
new Product('Banana', 'assets/banana.jpeg');
new Product('Bathroom', 'assets/bathroom.jpeg');
new Product('Boots', 'assets/boots.jpeg');
new Product('Breakfast', 'assets/breakfast.jpeg');
new Product('Bubblegum', 'assets/bubblegum.jpeg');
new Product('Chair', 'assets/chair.jpeg');
new Product('Cthulhu', 'assets/cthulhu.jpeg');
new Product('Dog-duck', 'assets/dog-duck.jpeg');
new Product('Dragon', 'assets/dragon.jpeg');
new Product('Pen', 'assets/pen.jpeg');
new Product('Pet-sweep', 'assets/pet-sweep.jpeg');
new Product('Scissors', 'assets/scissors.jpeg');
new Product('Shark', 'assets/shark.jpeg');
new Product('Sweep', 'assets/sweep.png');
new Product('Tauntaun', 'assets/tauntaun.jpeg');
new Product('Unicorn', 'assets/unicorn.jpeg');
new Product('Water-can', 'assets/water-can.jpeg');
new Product('Wine', 'assets/wine-glass.jpeg');


function displayChart(){

let ctx = document.getElementById("chart").getContext("2d");


let labels = [];
let productVotes = {
    label: '#of Votes',
    data: [],
    backgroundColor: ["rgba(128, 57, 26, 0.8)"]
};

let productViews = {
    label: '# of Views',
    data: [],
    backgroundColor: ["rgba(29, 29, 2, 0.8)"]
};

//loop
for(let i = 0; i < Product.allProductsArray.length; i++){
    let product = Product.allProductsArray[i];

    labels[i] = product.name;
    productVotes.data[i] = product.clicks;
    productViews.data[i] = product.views;
}

let chart = new Chart(ctx,{
    type: "bar",
    data: {
        labels: labels,
        datasets: [
        productVotes,
        productViews,
    ],
    },
    options:{
        scales:{
            y:{
                beginAtZero: true,
            },
        },
    },
});

}
renderProducts();
productContainer.addEventListener('click', handleProductClick);

