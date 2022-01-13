// Extending Class
class Product {
    constructor(itemName, price, discount, productCode) {
        this.itemName = itemName;
        this.price = price;
        this.discount = discount;
        this.productCode = productCode;
    }

    get getDiscountValue() {
        return this.discount;
    }

    set setDiscountValue(value) {
        this.discount = value;
    }

    discountValue() {
        return this.discount*this.price/100;
    }
};

class Furniture extends Product {
    constructor(itemName, price, discount, productCode, color) {
        super(itemName, price, discount, productCode);
        this.color = color;
    }

    getItemName() {
        return this.itemName + " is a Furniture";
    } 
}

let pencil = new Furniture('Pencil', 80, 10, 'FR', 'red');

console.log(pencil.getItemName());
console.log(pencil);