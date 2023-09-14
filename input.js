// Add this JavaScript code to your existing script.js file or in a separate JavaScript file
document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { name: 'K.Accessories', price: 39.00 },
        { name: 'K. Accessories', price: 25.00 },
        { name: 'Home Cooker', price: 49.00 },
        { name: 'Sports Back Cap', price: 49.00 },
        { name: 'Full Jersey Set', price: 69.00 },
        { name: 'Sports cates', price: 159.00 },
    ];

    const productDetails = document.querySelector('.product-details');
    const productName = document.getElementById('product-name');
    const productPrice = document.getElementById('product-price');
    const cartItems = document.getElementById('cart-items');
    const totalAmount = document.getElementById('total-amount');

    const shoppingCart = [];

    // Function to update the shopping cart and total amount
    function updateCart() {
        cartItems.innerHTML = '';
        let cartTotal = 0;

        for (const item of shoppingCart) {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - Rs. ${item.price.toFixed(2)}`;
            cartItems.appendChild(listItem);
            cartTotal += item.price;
        }

        totalAmount.textContent = `Total Amount: Rs. ${cartTotal.toFixed(2)}`;
    }

    // Add click event listeners to each product
    for (let i = 0; i < products.length; i++) {
        const productCard = document.querySelectorAll('.card')[i];
        productCard.addEventListener('click', () => {
            const selectedProduct = products[i];
            shoppingCart.push(selectedProduct);
            updateCart();

            // Display product details when clicked
            productName.textContent = `Name: ${selectedProduct.name}`;
            productPrice.textContent = `Price: Rs. ${selectedProduct.price.toFixed(2)}`;
            productDetails.style.display = 'block';
        });
    }
});
