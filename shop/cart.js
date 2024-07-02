// Purpose: To handle the cart page functionality
    document.addEventListener('DOMContentLoaded', () => {
        const cartItems = document.querySelectorAll('.cart-page .cart-info');
        const subtotalElement = document.querySelector('.total-price tr:nth-child(1) td:nth-child(2)');
        const taxElement = document.querySelector('.total-price tr:nth-child(2) td:nth-child(2)');
        const totalElement = document.querySelector('.total-price tr:nth-child(3) td:nth-child(2)');
        const checkoutButton = document.querySelector('.btn-checkout');

        cartItems.forEach(item => {
            const removeBtn = item.querySelector('.remove-btn');
            const quantityInput = item.parentElement.parentElement.querySelector('input[type="number"]');
            const price = parseFloat(item.querySelector('small').textContent.replace('Price: ₵', ''));

            removeBtn.addEventListener('click', () => {
                item.parentElement.parentElement.remove();
                updateCartTotal();
            });

            quantityInput.addEventListener('change', () => {
                if (quantityInput.value <= 0) {
                    quantityInput.value = 1;
                }
                updateCartTotal();
            });

            function updateCartTotal() {
                let subtotal = 0;
                document.querySelectorAll('.cart-page table tr:not(:first-child)').forEach(row => {
                    const quantity = row.querySelector('input[type="number"]').value;
                    const price = parseFloat(row.querySelector('.cart-info small').textContent.replace('Price: ₵', ''));
                    const subtotalCell = row.querySelector('td:last-child');
                    const itemSubtotal = price * quantity;
                    subtotalCell.textContent = `₵${itemSubtotal.toFixed(2)}`;
                    subtotal += itemSubtotal;
                });

                const tax = subtotal * 0.1; // 10% tax
                const total = subtotal + tax;
                subtotalElement.textContent = `₵${subtotal.toFixed(2)}`;
                taxElement.textContent = `₵${tax.toFixed(2)}`;
                totalElement.textContent = `₵${total.toFixed(2)}`;
            }

            updateCartTotal();
        });

        // Proceed to Checkout button
        checkoutButton.addEventListener('click', () => {
            // Redirect to checkout page
            window.location.href = 'checkout.html';
        });
    });

