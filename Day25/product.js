document.addEventListener("DOMContentLoaded", function() {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())  
        .then(productDetails => {
            const productContainer = document.getElementById("product-container");
            
            productDetails.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('col-md-4', 'mb-4');
                productCard.innerHTML = `
                    <div class="card" style="width: 18rem;">
                        <img src="${product.image}" class="card-img-top" alt="${product.title}" />
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <h2>$${product.price}</h2>
                            <a href="details.html?id=${product.id}" class="btn btn-primary">View Product</a>
                        </div>
                    </div>
                `;

                productContainer.appendChild(productCard);
            });
        })
        .catch(error => {
            console.error('Error fetching the products:', error);
        });
});