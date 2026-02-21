<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './mailer/PHPMailer.php';
require './mailer/SMTP.php';
require './mailer/Exception.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = htmlspecialchars($_POST['guestName']);
    $email = htmlspecialchars($_POST['guestEmail']);
    $room = htmlspecialchars($_POST['roomType']);
    $phone = htmlspecialchars($_POST['guestPhone']);
    $guests = htmlspecialchars($_POST['guestCount']);
    $checkin = htmlspecialchars($_POST['checkInDate']);
    $checkout = htmlspecialchars($_POST['checkOutDate']);
    $message = htmlspecialchars($_POST['specialRequests']);

    $mail = new PHPMailer(true);

    try {

        // SMTP Settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'info@tampararesort.com';
        $mail->Password   = 'eyvl ihos qkeq wvcv';
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        // Sender
        $mail->setFrom('info@tampararesort.com', 'Website Booking');

        // Receiver
        $mail->addAddress('info@tampararesort.com', 'Tampara Resort');

        // Reply To (User Email)
        $mail->addReplyTo($email, $name);

        $mail->isHTML(true);
        $mail->Subject = "New Room Booking Enquiry";

 $mail->Body = "
<div style='font-family: Arial, sans-serif; background:#f4f4f4; padding:20px;'>
    <div style='max-width:600px; margin:auto; background:#ffffff; padding:25px; border-radius:10px; box-shadow:0 5px 15px rgba(0,0,0,0.1);'>
        
        <h2 style='color:#d35400; text-align:center; margin-bottom:20px;'>
            🏨 New Room Booking Enquiry
        </h2>

        <table style='width:100%; border-collapse:collapse;'>
            <tr>
                <td style='padding:10px; font-weight:bold;'>Full Name:</td>
                <td style='padding:10px;'>$name</td>
            </tr>
            <tr style='background:#f9f9f9;'>
                <td style='padding:10px; font-weight:bold;'>Email Address:</td>
                <td style='padding:10px;'>$email</td>
            </tr>
            <tr>
                <td style='padding:10px; font-weight:bold;'>Room Type:</td>
                <td style='padding:10px;'>$room</td>
            </tr>
            <tr style='background:#f9f9f9;'>
                <td style='padding:10px; font-weight:bold;'>Phone Number:</td>
                <td style='padding:10px;'>$phone</td>
            </tr>
            <tr>
                <td style='padding:10px; font-weight:bold;'>Number of Guests:</td>
                <td style='padding:10px;'>$guests</td>
            </tr>
            <tr style='background:#f9f9f9;'>
                <td style='padding:10px; font-weight:bold;'>Check-In Date:</td>
                <td style='padding:10px;'>$checkin</td>
            </tr>
            <tr>
                <td style='padding:10px; font-weight:bold;'>Check-Out Date:</td>
                <td style='padding:10px;'>$checkout</td>
            </tr>
        </table>

        <div style='margin-top:20px; padding:15px; background:#fff8f0; border-left:4px solid #d35400;'>
            <strong>Special Requests:</strong><br>
            $message
        </div>

        <p style='margin-top:25px; font-size:12px; color:#777; text-align:center;'>
            This enquiry was submitted from Tampara Resort website.
        </p>

    </div>
</div>
";


        $mail->send();

    header("Location: thankyou.html");
    exit();


    } catch (Exception $e) {
        echo "Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
