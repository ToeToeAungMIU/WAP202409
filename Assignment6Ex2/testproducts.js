import Product from './products.js'; 
console.log('Testing CRUD functionalities in product')

console.log("*** Test case 1 :Adding a new product ***")
const newProduct1 =new Product(null,'Book',2,'Book');
newProduct1.save();

const newProduct2 =new Product(null,'Pen',3,'Pen');
newProduct2.save();

const newProduct3 =new Product(null,'Pencil',1,'Pencil');
newProduct3.save();

const newProduct4 =new Product(null,'Eraser',4,'Eraser');
newProduct4.save();


console.log("Product after creating a new product " , Product.fetchAll())


console.log("*** Test case 2 :Finding product ***")

const existingProduct = Product.findById(3)
console.log("Found the product ",existingProduct)

console.log("*** Test case 3 : Updating the existing product ***")

if(existingProduct){
        existingProduct.title = "Ruler";
        existingProduct.description = "Ruler";
        existingProduct.price = 6;
        existingProduct.update();
        console.log("Updated product is ",existingProduct)
}

console.log('Product list after updating :', Product.fetchAll());


try {
    Product.deleteById(3);
    console.log('Product has been deleted successfully');
  } catch (error) {
    console.log('Error:', error.message);
  }
  
  console.log('Product List after deletion:', Product.fetchAll());