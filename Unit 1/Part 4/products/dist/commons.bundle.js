"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["commons"],{

/***/ "../styles.css":
/*!*********************!*\
  !*** ../styles.css ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./constants.js":
/*!**********************!*\
  !*** ./constants.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SERVER": () => (/* binding */ SERVER)
/* harmony export */ });
const SERVER = "http://arturober.com:5005";


/***/ }),

/***/ "./http.class.js":
/*!***********************!*\
  !*** ./http.class.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Http": () => (/* binding */ Http)
/* harmony export */ });


class Http {
  async ajax(method, url, headers = {}, body = null) {
    const resp = await fetch(url, { method, headers, body });
    if (!resp.ok) throw new Error(resp.statusText);
    if (resp.status != 204) {
      return await resp.json(); // promise
    } else {
      return null;
    }
  }

  get(url) {
    return this.ajax("GET", url);
  }

  post(url, data) {
    return this.ajax(
      "POST",
      url,
      { "Content-Type": "application/json" },
      JSON.stringify(data)
    );
  }

  put(url, data) {
    return this.ajax(
      "PUT",
      url,
      { "Content-Type": "application/json" },
      JSON.stringify(data)
    );
  }

  delete(url) {
    return this.ajax("DELETE", url);
  }
}


/***/ }),

/***/ "./product-service.class.js":
/*!**********************************!*\
  !*** ./product-service.class.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductService": () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./constants.js");
/* harmony import */ var _http_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.class */ "./http.class.js");



class ProductService {
  constructor() {
    this.http = new _http_class__WEBPACK_IMPORTED_MODULE_1__.Http();
  }

  async getProducts() {
    let resp = await this.http.get(`${_constants__WEBPACK_IMPORTED_MODULE_0__.SERVER}/products`);
    return resp.products;
  }

  async addProduct(product) {
    let resp = await this.http.post(`${_constants__WEBPACK_IMPORTED_MODULE_0__.SERVER}/products`, product);
    return resp.product;
  }

  async deleteProduct(id) {
    await this.http.delete(`${_constants__WEBPACK_IMPORTED_MODULE_0__.SERVER}/products/${id}`);
  }
}

/***/ })

}]);
//# sourceMappingURL=commons.bundle.js.map