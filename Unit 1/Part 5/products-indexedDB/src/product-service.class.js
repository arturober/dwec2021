import { ProductsDB } from "./product-db.class";

export class ProductService {
  constructor() {}

  async getProducts() {
    let prodDb = await ProductsDB.getDB();
    return prodDb.getAllProducts();
  }

  async addProduct(product) {
    let prodDb = await ProductsDB.getDB();
    return prodDb.insertProduct(product);
  }

  async deleteProduct(id) {
    let prodDb = await ProductsDB.getDB();
    await prodDb.deleteProduct(id);
  }
}