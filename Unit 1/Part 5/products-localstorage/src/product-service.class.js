export class ProductService {
  constructor() {
    this.products = localStorage.products ? JSON.parse(localStorage.products) : [];
  }

  async getProducts() {
    return this.products;
  }

  async addProduct(product) {
    this.products.push(product);
    localStorage.products = JSON.stringify(this.products);
    return product;
  }

  async deleteProduct(product) {
    this.products = this.products.filter(p => p != product);
    localStorage.products = JSON.stringify(this.products);
  }
}