class ShoppingCart {
    constructor(items) {
        this.items = []
    }

    getItems() {
        return this.items
    }

    addItem(name, quantity, pricePerUnit) {
        return this.items.push({ name, quantity, pricePerUnit })
    }

    clear() {
        return this.items.splice(0,this.items.length)
    }

    total() {
        return this.items.reduce((acc, item) => {
            return acc + (item.quantity * item.pricePerUnit)
        }, 0)
    }
}

// const cartTest = new ShoppingCart()
// cartTest.addItem("item 1", 1, 15.5)
// cartTest.addItem("item 2", 2, 3)
// cartTest.addItem("item 3", 10, 2)
// cartTest.addItem("item 4", 0, 2)
// cartTest.addItem("item 5", 2, 0)
// console.log(cartTest.total())
// cartTest.addItem("Name of the item", 1, 99.99)
// console.log(cartTest.getItems())
// cartTest.clear()
// console.log(cartTest.getItems())


module.exports.ShoppingCart = ShoppingCart