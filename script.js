const cart = [];
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsDiv = document.getElementById('cart-items');
const totalDiv = document.getElementById('total');

addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const productElement = e.target.closest('.product');
        const productName = productElement.querySelector('p').innerText;
        const productPrice = parseFloat(productElement.querySelectorAll('p')[1].innerText.replace('$', ''));
        
        cart.push({ name: productName, price: productPrice });
        updateCart();
    });
});

function updateCart() {
    cartItemsDiv.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerText = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsDiv.appendChild(itemDiv);
        total += item.price;
    });

    totalDiv.innerText = `Total: $${total.toFixed(2)}`;
}

document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length > 0) {
        alert('Proceeding to checkout');
    
    } else {
        alert('Your cart is empty!');
    }
});
