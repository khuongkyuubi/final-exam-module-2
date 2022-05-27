"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductManager_js_1 = require("./ProductManager.js");
var Product_js_1 = require("./Product.js");
var productManager = new ProductManager_js_1.ProductManager();
var category;
(function (category) {
    category[category["PHONE"] = 0] = "PHONE";
    category[category["LAPTOP"] = 1] = "LAPTOP";
})(category || (category = {}));
var newProduct = new Product_js_1.Product(1530, "Iphone", category.PHONE, 55600, 20, "Điện thoại siêu cấp thông minh", new Date());
var newProduct2 = new Product_js_1.Product(1520, "Samsung", category.PHONE, 5644, 16, "Điện thoại xịn xò", new Date());
var newProduct3 = new Product_js_1.Product(1352, "Xiaomi", category.PHONE, 86565, 10, "Điện thoại thông minh", new Date());
var newProduct4 = new Product_js_1.Product(565, "Macbook", category.LAPTOP, 12355, 20, "Laptop xịn", new Date());
productManager.createProduct(newProduct, newProduct2, newProduct3, newProduct4);
var showList = function () {
    console.table(productManager.readProductList());
};
var addProduct = function (product) {
    productManager.createProduct(product);
    showList();
};
var searchProduct = function (name) {
    var searchProduct = productManager.productList.filter(function (product) {
        return product["name"] === name;
    });
    console.table(searchProduct);
};
var editProduct = function (name, editProduct) {
    var product = productManager.productList.find(function (product) {
        return product["name"] === name;
    });
    var index = productManager.productList.indexOf(product);
    productManager.productList.splice(index, 1, editProduct);
    showList();
};
var deleteProduct = function (name) {
    var product = productManager.productList.find(function (product) {
        return product["name"] === name;
    });
    var index = productManager.productList.indexOf(product);
    productManager.productList.splice(index, 1);
    showList();
};
