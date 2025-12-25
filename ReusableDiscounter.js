function discountPrice(discount) {
    return function(price) {
        return price - (price * discount);
    }
}

let discount10 = discountPrice(0.10);

console.log(discount10(100)); // Output: 90