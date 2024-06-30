<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate input data
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    $subject = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_STRING);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

    // Check if all required fields are filled out
    if ($name && $email && $subject && $message) {
        // Recipient email address
        $to = "your-email@example.com";
        $email_subject = "Contact Form: $subject";
        $email_body = "You have received a new message from the contact form on your website.\n\n".
                      "Here are the details:\n\n".
                      "Name: $name\n\n".
                      "Email: $email\n\n".
                      "Subject: $subject\n\n".
                      "Message:\n$message";
        
        $headers = "From: $email\n";
        $headers .= "Reply-To: $email\n";

        // Send the email
        if (mail($to, $email_subject, $email_body, $headers)) {
            echo "Thank you! Your message has been sent.";
        } else {
            echo "Sorry, something went wrong. Please try again later.";
        }
    } else {
        echo "Please fill in all fields correctly.";
    }
} else {
    echo "Invalid request.";
}

?>
