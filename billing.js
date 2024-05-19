document.addEventListener('DOMContentLoaded', () => {
    displayCart();
    
    const removeButtons = document.querySelectorAll('.remove-from-cart-btn');
    removeButtons.forEach(button => {
        button.addEventListener('click', removeFromCart);
    });

    const quantityInputs = document.querySelectorAll('.cart-item-quantity');
    quantityInputs.forEach(input => {
        input.addEventListener('change', updateQuantity);
    });
});


function displayCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    let totalPrice = 0;

    cartContainer.innerHTML = ''; // Clear the cart container before displaying new items

    cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <img src="images/${getSafeImageFilename(item.name)}.jpg" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <h3 class="cart-item-title">${item.name}</h3>
                    <p class="cart-item-price">Price: ${item.price}</p>
                    <input type="number" value="${item.quantity}" class="cart-item-quantity" min="1"> <!-- Change min value to 0 -->
                </div>
            </div>
            <button class="remove-from-cart-btn">Remove</button>
        `;
        cartContainer.appendChild(cartItem);
        totalPrice += parseFloat(item.price) * parseInt(item.quantity); // Parse values as numbers
    });

    // Display total price
    const totalElement = document.getElementById('total-price');
    totalElement.textContent = `Total: Rp${totalPrice.toFixed(2)}`; // Ensure total price is displayed properly
}

function removeFromCart(event) {
    const button = event.target;
    const cartItem = button.parentElement;
    const itemName = cartItem.querySelector('.cart-item-title').textContent;

    // Remove one occurrence of the item from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const indexToRemove = cart.findIndex(item => item.name === itemName);
    
    if (indexToRemove !== -1) {
        cart.splice(indexToRemove, 1); // Remove one occurrence
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Update displayed cart
    displayCart();
}

function updateQuantity(event) {
    const input = event.target;
    const cartItem = input.parentElement.parentElement;
    const itemName = cartItem.querySelector('.cart-item-title').textContent;
    const newQuantity = parseInt(input.value);

    // Update quantity of the item in localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemToUpdate = cart.find(item => item.name === itemName);
    if (itemToUpdate) {
        itemToUpdate.quantity = newQuantity;
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Update displayed cart
    displayCart();
}

function getSafeImageFilename(name) {
    // Replaces whitespace with hyphens and converts to lowercase
    return name.toLowerCase().replace(/\s+/g, '-');
}
