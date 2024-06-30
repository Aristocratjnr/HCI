<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $order_id = filter_input(INPUT_POST, 'order_id', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);

    if ($order_id && $email) {
        // Placeholder logic for tracking order
        // Replace this with actual logic to fetch order status from the database
        $order_status = "Processing"; // Example status

        echo "Order ID: $order_id<br>";
        echo "Email: $email<br>";
        echo "Order Status: $order_status";
    } else {
        echo "Please enter a valid Order ID and Email.";
    }
} else {
    echo "Invalid request.";
}

?>