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

while (product1 === product2){
    product2 = getRandomNumber();
}

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
    if (!event.target instanceof HTMLImageElement){
        alert('Must click an image');
    }
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
        resultButton.className = 'clicks-allowed';
        productContainer.className = 'no-voting';
        alert('Max votes submitted. Check Results');
    }else{
        renderProducts();
    }
}

function renderResults(){
    let ul = document.querySelector('ul');
    for (let i = 0; i < Product.allProductsArray.length; i++){
        let li = document.createElement('li');
        li.textContent = `${Product.allProductsArray[i].name} had ${Product.allProductsArray[i].views} views and was chosen ${Product.allProductsArray[i].clicks} times.`;
        ul.appendChild(li);
    }
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

renderProducts();

productContainer.addEventListener('click', handleProductClick);


