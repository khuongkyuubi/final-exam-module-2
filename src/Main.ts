import {ProductManager} from "./ProductManager.js";
import {Product} from "./Product.js";

const productManager = new ProductManager();

enum category {
    PHONE,
    LAPTOP
}


let newProduct = new Product(1530, "Iphone", category.PHONE, 55600, 20, "Điện thoại siêu cấp thông minh", new Date());
let newProduct2 = new Product(1520, "Samsung", category.PHONE, 5644, 16, "Điện thoại xịn xò", new Date());
let newProduct3 = new Product(1352, "Xiaomi", category.PHONE, 86565, 10, "Điện thoại thông minh", new Date());
let newProduct4 = new Product(565, "Macbook", category.LAPTOP, 12355, 20, "Laptop xịn", new Date());

productManager.createProduct(newProduct, newProduct2, newProduct3, newProduct4);


const showList = (): void => {
    console.table(productManager.readProductList());
}

const addProduct = (product: Product): void => {
    productManager.createProduct(product);
    showList()
}

const searchProduct = (name: string): void => {
    let searchProduct = productManager.productList.filter((product) => {
        return product["name"] === name;
    })
    console.table(searchProduct);


}
const editProduct = (name: string, editProduct : Product[]): void => {
    let product = productManager.productList.find((product) => {
        return product["name"] === name;
    })
    let index = productManager.productList.indexOf(product);

    productManager.productList.splice(index, 1, editProduct);
    showList();
}

const deleteProduct = (name: string): void => {
    let product = productManager.productList.find((product) => {
        return product["name"] === name;
    })
    let index = productManager.productList.indexOf(product);

    productManager.productList.splice(index, 1);
    showList();

}



