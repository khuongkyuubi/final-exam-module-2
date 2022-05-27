"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductManager = void 0;
var ProductManager = /** @class */ (function () {
    function ProductManager() {
        this.productList = [];
    }
    ProductManager.prototype.readProductList = function () {
        return this.productList;
    };
    ProductManager.prototype.createProduct = function () {
        var _a;
        var product = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            product[_i] = arguments[_i];
        }
        (_a = this.productList).push.apply(_a, product);
    };
    ProductManager.prototype.deleteProduct = function (index) {
        this.productList.splice(index, 1);
    };
    ProductManager.prototype.updateProduct = function (index, productUpdated) {
        this.productList.splice(index, 1, productUpdated);
    };
    return ProductManager;
}());
exports.ProductManager = ProductManager;
