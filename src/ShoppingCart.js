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

module.exports.ShoppingCart = ShoppingCart