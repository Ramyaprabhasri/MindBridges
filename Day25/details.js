const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

if (productId) {
    fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(response => response.json())
        .then(product => {
            const productDetailsContainer = document.getElementById("product-details");
            productDetailsContainer.innerHTML = `
                <h1>${product.title}</h1>
                <img src="${product.image}" alt="${product.title}" />
                <h2>Price: $${product.price}</h2>
                <p>${product.description}</p>
                <a href="product.html" class="btn">Back to Products</a>
            `;
        })
        .catch(error => console.error('Error fetching product details:', error));
} else {
    document.getElementById("product-details").innerHTML = "<h2>Product not found!</h2>";
}