const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

if (productId) {
    fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(response => response.json())
        .then(product => {
            const productDetailsContainer = document.getElementById("product-details");
            productDetailsContainer.innerHTML = `
                <div class="left">
                    <img src="${product.image}" alt="${product.title}" />
                    <h1>${product.title}</h1>
                </div>
                <div class="right">
                    <h2>Price: $${product.price}</h2>
                    <p>${product.description}</p>
                    <div class="buttons">
                        <a href="#" class="cart">Add to Cart</a>
                        <a href="#" class="buy">Buy Now</a>
                    </div>
                    <a href="product.html" class="btn back">Back to Products</a>
                </div>
            `;
        })
        .catch(error => console.error('Error fetching product details:', error));
} else {
    document.getElementById("product-details").innerHTML = "<h2>Product not found!</h2>";
}
