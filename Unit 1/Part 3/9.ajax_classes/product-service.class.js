class ProductService {
    constructor() {
        this.http = new Http();
    }

    async getProducts() {
        let resp = await this.http.get(`${SERVER}/products`);
        return resp.products;
    }

    async addProduct(product) {
        let resp = await this.http.post(`${SERVER}/products`, product);
        return resp.product;
    }

    async deleteProduct(id) {
        await this.http.delete(`${SERVER}/products/${id}`);
    }
}