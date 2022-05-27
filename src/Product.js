"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product() {
        var input = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            input[_i] = arguments[_i];
        }
        this._code = input[0];
        this._name = input[1];
        this._type = input[2];
        this._price = input[3];
        this._quantity = input[4];
        this._detail = input[5];
        this._createAt = input[6];
    }
    Object.defineProperty(Product.prototype, "code", {
        get: function () {
            return this._code;
        },
        set: function (value) {
            this._code = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            this._price = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "quantity", {
        get: function () {
            return this._quantity;
        },
        set: function (value) {
            this._quantity = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "detail", {
        get: function () {
            return this._detail;
        },
        set: function (value) {
            this._detail = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "createAt", {
        get: function () {
            return this._createAt;
        },
        set: function (value) {
            this._createAt = value;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
exports.Product = Product;
