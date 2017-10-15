const shopClient = ShopifyBuy.buildClient({
    accessToken: 'a7d7c34d7e531268037a004428ba7c93',
    domain: 'snailfarm.myshopify.com',
    appId: '6'
});

function emptyCart() {
    shopClient.fetchRecentCart()
        .then(function(recentCart) {
            recentCart.clearLineItems();
            location.reload();
        })
        .catch(function() {
            console.log('empty cart failed');
        });
}

 function fetchCart() {
    console.log("HERE");
    shopClient.fetchRecentCart()
        .then(function(recentCart) {
            const cartNumber = recentCart.attrs.line_items.reduce(function(result, item) {
                return result += item.quantity;
            }, 0);

            if (cartNumber > 0) {
                var cartFloat = document.getElementById("cartFloat");
                cartFloat.href = recentCart.checkoutUrl;
                var newImg = document.createElement("img");
                newImg.src = "https://d8a8qkbr68bun.cloudfront.net/shopping_cart.png";
                cartFloat.appendChild(newImg);

                var newA = document.createElement("a");
                newA.id = "cartNumber";

                const newContent = document.createTextNode(cartNumber.toString());
                newA.appendChild(newContent);

                const emptyCartText = document.createTextNode("EMPTY CART");
                document.getElementById("emptyCartFloat").appendChild(emptyCartText);

                document.body.insertBefore(newA, cartFloat);
            } else {
                return;
            }

        })
        .catch(function () {
            console.log('cart fetch failed');
        });
}

document.onpageshow = fetchCart();
