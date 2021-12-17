export interface Product {
  id?: number;
  description: string;
  price: number;
  available: string;
  imageUrl: string;
  rating: number;
  state?: string;
}

export interface ProductsResponse {
  products: Product[];
}

export interface ProductResponse {
  product: Product;
}
