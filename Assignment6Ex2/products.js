let products = []; 
class Product {
  constructor(id, title, price, description) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
  }

  save() {
    const existingProduct= products.findIndex(prod => prod.id === this.id);
    if (existingProduct >= 0) {   
      products[existingProduct] = this;
    } else {    
      this.id = products.length > 0 ? products[products.length - 1].id + 1 : 1; 
      products.push(this);
    }
  }

  update() {
    const existingProduct = products.findIndex(prod => prod.id === this.id);
    if (existingProduct >= 0) {
      products[existingProduct] = this;
    } else {
      throw new Error('Product not found'); 
    }
  }

  static fetchAll() {
    return products;
  }

  static findById(productId) {
    return products.find(prod => prod.id === productId);
  }

  static deleteById(productId) {
    const index = products.findIndex(prod => prod.id === productId);
    if (index >= 0) {
      products.splice(index, 1); 
    } else {
      throw new Error('Product not found'); 
    }
  }
}

export default Product;
