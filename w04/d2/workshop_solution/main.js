console.log('🚀');

class Product {
  constructor(src, title){
    this.image_url = src;
    this.title = title;
    //Where to put product
    this.container = document.getElementById('products');
    //make a div with classname product
    this.element = document.createElement('div');
    this.element.className = 'product';
  }

  display(){

    //an image for the product, appended to the div we made
    let tempImg = document.createElement('img');
    tempImg.src = this.image_url;
    this.element.appendChild(tempImg);

    //an name for the product
    let tempName = document.createElement('h4');
    tempName.innerHTML = this.title;
    this.element.appendChild(tempName);

    //append the div to the container on the page
    this.container.appendChild(this.element);
  }
}

//use axios to get data
axios.get('https://fizal.me/products.json')
  .then(putProducts);

let products = []

//axios uses this to handle the data
function putProducts(response){
  //use a for loop to go through the products
  for (let index = 0; index < response.data.products.length; index++) {

    const productData = response.data.products[index];

    //i use the data from the api to make a Prodcut object
    let productObject = new Product(productData.images[0].src, productData.title);

    //puting the product object in an array;
    products.push(productObject);

    //this method/function actually does the DOM stuff to put it on the page
    productObject.display();

  }
}
