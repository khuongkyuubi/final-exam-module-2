import {Product} from "./Product";
export class ProductManager {
    productList : Product[] = [];
    constructor() {
    }

    readProductList() : Product[] {
        return this.productList;
    }

    createProduct(...product : Product[]) : void {
        this.productList.push(...product)
    }

    deleteProduct(index:  number) : void {
        this.productList.splice(index, 1);
    }

    updateProduct(index: number, productUpdated) : void {
        this.productList.splice(index, 1, productUpdated);
    }

}