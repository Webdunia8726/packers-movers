<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // PHPMailer ka path

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['Your_name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['number']);
    $service = htmlspecialchars($_POST['services']);
    $message = htmlspecialchars($_POST['massage']);

    $mail = new PHPMailer(true);

    try {
        // SMTP settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; 
        $mail->SMTPAuth = true;
        $mail->Username = 'maakripapackersjaipur@gmail.com'; // Apna Gmail ID likho
        $mail->Password = 'vnmj pjqf ilyy eysw'; // Gmail App Password use karo
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Sender & Recipient
        $mail->setFrom($email, $name);
        $mail->addAddress('maakripapackersjaipur@gmail.com'); // Jisme email receive karni hai

        // Email Content
        $mail->isHTML(true);
        $mail->Subject = "New Inquiry: $service";
        $mail->Body = "
            <h3>Inquiry Details</h3>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Phone:</strong> $phone</p>
            <p><strong>Service:</strong> $service</p>
            <p><strong>Message:</strong><br> $message</p>
        ";

        $mail->send();

        // Redirect to Thank You page
        header("Location: thankyou.html");
        exit();
    } catch (Exception $e) {
        echo "Email could not be sent. Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Invalid Request";
}
?>
