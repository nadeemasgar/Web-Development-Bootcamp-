// Class Declaration
/* class Product {
    constructor(itemName, price, discount, productCode) {
        this.itemName = itemName;
        this.price = price;
        this.discount = discount;
        this.productCode = productCode;
    }
}

let pencil = new Product('Pencil', 20, 2, 'P10');

console.log(Product); */

// Class Expression
const Product1 = class Product {
    constructor(itemName, price, discount, productCode) {
        this.itemName = itemName;
        this.price = price;
        this.discount = discount;
        this.productCode = productCode;
    }
};

let chair = new Product1('Chair', 499, 15, 'C10');

console.log(Product1);  // Product

/* *********************************************************** */

const Product1 = class {
    constructor(itemName, price, discount, productCode) {
        this.itemName = itemName;
        this.price = price;
        this.discount = discount;
        this.productCode = productCode;
    }
};

let chair = new Product1('Chair', 499, 15, 'C10');

console.log(Product1); // Product1