function calculateDiscountedPrice(quantity, pricePerItem) {
    debugger;
    let totalPrice = 0;

    for (let i = 0; i < quantity; i++) {
        totalPrice += pricePerItem;
        debugger;
    }

    if (quantity >= 10) {
        totalPrice *= 0.9; // apply 10% discount
        debugger;
    }

    return totalPrice;
}


module.exports = calculateDiscountedPrice;