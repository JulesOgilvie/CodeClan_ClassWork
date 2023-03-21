document.addEventListener('DOMContentLoaded', () => {
  console.log('app.js:', data);
  // creating a variable to store the products section to via the class name. Selecting the class using querySelector
  const products = document.querySelector('#products');

  // creating a for loop to cycle through the products and execute a function to print eachp product and it's details. data.products calls the object
  for (const product of data.products) {
    // creating a new variable to create a new element (list in this case)
    const newProduct = document.createElement('ul');
    // gets the newProduct element and associates it with the class 'product' in the CSS document to give it a style
    newProduct.classList.add('product')
    // adds newProduct to the product section to be displayed
    products.appendChild(newProduct);
  
    // creates a new li element and assigns it to productName for storage
    const productName = document.createElement('li');
    // gives the product name text content by calling in the name data from the product object
    productName.textContent = product.name;
    // sends the product name to newProduct to be displayed
    newProduct.appendChild(productName);

    const productDesc = document.createElement('li');
    productDesc.textContent = product.description;
    newProduct.appendChild(productDesc);

    const productPrice = document.createElement('li');
    productPrice.textContent = product.price;
    newProduct.appendChild(productPrice);
  }

});
