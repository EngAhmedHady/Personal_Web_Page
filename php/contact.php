<?php
// echo '<pre>'; print_r($_POST); echo '</pre>';


    if(isset($_POST['Email']) && $_POST['Email'] != ''){        
        if (filter_var($_POST['Email'], FILTER_VALIDATE_EMAIL)){
            // echo '<pre>'; print_r($_POST); echo '</pre>';
            //submit the form
            $SenderName = $_POST['FullName'];
            $SenderEmail = $_POST['Email'];
            $MessageSubject = $_POST['Subject'];
            $TheMessage = $_POST['message'];
            echo '<h3> Sender name is '. $SenderName .'</h3>';
            echo '<h3> Sender email is '. $SenderEmail .'</h3>';
            echo '<h3> Message subject  is '. $MessageSubject .'</h3>';
            echo '<h3> Message content '. $TheMessage .'</h3>';

            $to = "ahmed.hady.hanfy92@gmail.com";
            $body = "";

            $body .= "From: ".$SenderName. "\r\n";
            $body .= "Email: ".$SenderEmail. "\r\n";
            $body .= "Message: ".$TheMessage. "\r\n";

            mail($to,$MessageSubject,$body);
            echo '<h3> Message Sent </h3>';
            

    //         $previous = "javascript:history.go(-1)";
    //         if(isset($_SERVER['HTTP_REFERER'])) {
    //             $previous = $_SERVER['HTTP_REFERER'];
    //         }
    //     }
        
        }
        else{
            echo '<h3>email is not Valid</h3>';
        }

    // ini_set('display_errors', 1);
    // $previous = "javascript:history.go(-1)";
    // if(isset($_SERVER['HTTP_REFERER'])) {
    //     $previous = $_SERVER['HTTP_REFERER'];
    }
    else{
        echo '<h3> Nothing exist</h3>';
    }
?>