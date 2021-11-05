import { SERVER } from "./constants";
import { Http } from "./http.class";
import { Product } from "./interfaces/product";
import { ProductResponse, ProductsResponse } from "./interfaces/responses";

export class ProductService {
  private http: Http;

  constructor() {
    this.http = new Http();
  }

  async getProducts(): Promise<Product[]> {
    const resp = await this.http.get<ProductsResponse>(`${SERVER}/products`);
    return resp.products;
  }

  async addProduct(product: Product): Promise<Product> {
    const resp = await this.http.post<ProductResponse>(`${SERVER}/products`, product);
    return resp.product;
  }

  async deleteProduct(id: number): Promise<void> {
    await this.http.delete<void>(`${SERVER}/products/${id}`);
  }
}