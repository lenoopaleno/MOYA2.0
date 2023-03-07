<?php
// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// Set the email recipient
$to = 'jjczapski@gmail.com';

// Set the email subject
$subject = 'Wiadomość z formularza kontaktowego';

// Build the email message
$message = "Od: $name\n\n";
$message .= "Email: $email\n\n";
if (!empty($phone)) {
  $message .= "Telefon: $phone\n\n";
}
$message .= "Wiadomość:\n$message";

// Set the email headers
$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";

// Send the email
mail($to, $subject, $message, $headers);

// Return a success response
http_response_code(200);
echo "Wiadomość została wysłana.";
?>