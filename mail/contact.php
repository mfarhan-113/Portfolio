<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if(empty($_POST['name']) || empty($_POST['subject']) || empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(500);
    exit();
}

$name = strip_tags(htmlspecialchars($_POST['name']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$m_subject = strip_tags(htmlspecialchars($_POST['subject']));
$message = strip_tags(htmlspecialchars($_POST['message']));

$mail = new PHPMailer(true);

try {
    // SMTP settings
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com'; // SMTP server (use your provider's details)
    $mail->SMTPAuth = true;
    $mail->Username = 'officialforwork113@gmail.com'; // Your Gmail address
    $mail->Password = 'Farhan+2003';       // Your Gmail password or app-specific password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Email settings
    $mail->setFrom($email, $name);
    $mail->addAddress('officialforwork113@gmail.com'); // Your recipient email address
    $mail->Subject = $m_subject;
    $mail->Body = "You have received a new message from your website contact form.\n\n".
                  "Name: $name\nEmail: $email\n\nSubject: $m_subject\n\nMessage: $message";

    $mail->send();
    http_response_code(200);
} catch (Exception $e) {
    http_response_code(500);
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

?>
