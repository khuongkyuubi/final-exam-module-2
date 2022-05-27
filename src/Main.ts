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
    try {
        let searchProduct = productManager.productList.filter((product) => {
            return product["name"] === name;
        })
        console.table(searchProduct);
    } catch (err) {
        console.log(err)
        console.log("Không thể tìm thấy", name);

    }


}
const editProduct = (name: string, editProduct: Product): void => {
    try {
        let product = productManager.productList.filter((product) => {
            return product["name"] === name;
        })
        let index = productManager.productList.indexOf(product[0]);

        productManager.productList.splice(index, 1, editProduct);
        showList();
    } catch (err) {
        console.log("Đã có lỗi khi sửa", err)
    }

}

const deleteProduct = (name: string): void => {

    try {
        let product = productManager.productList.filter((product) => {
            return product["name"] === name;
        })

        let index = productManager.productList.indexOf(product[0]);

        productManager.productList.splice(index, 1);
        showList();

    } catch (err) {
        console.log("Lỗi khi xóa ", err);
    }
}


showList();

addProduct(new Product(564, "Dell", category.LAPTOP, 13522, 16, "Laptop Dell", new Date()))

searchProduct("Samsung")



