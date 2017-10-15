const shopClient = ShopifyBuy.buildClient({
    accessToken: 'a7d7c34d7e531268037a004428ba7c93',
    domain: 'snailfarm.myshopify.com',
    appId: '6'
});

const productId = document.currentScript.getAttribute("productId");

var cart;
var product;

shopClient.fetchRecentCart()
    .then(function(recentCart) {
        cart = recentCart;
    })
    .catch(function () {
        console.log('cart fetch failed');
    });

shopClient.fetchProduct(productId)
    .then(function (fetchedProduct) {
        const variant = fetchedProduct.variants[0];
        const quantity = 1;
        product = { variant: variant, quantity: quantity };
    })
    .catch(function () {
        console.log('product fetch failed');
    });


function addToCart() {
    cart.createLineItemsFromVariants(product)
        .then(function(cart) {
            window.location.replace("index.html");
        })
        .catch(function() {
            console.log('onclick failed');
        });
}
