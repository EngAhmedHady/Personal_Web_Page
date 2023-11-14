<?php
    if(isset($_POST['Email']) && $_POST['Email'] != ''){
        
        if (filter_var($_POST['Email'], FILTER_VALIDATE_EMAIL)){
            //submit the form
            $SenderName = $_POST['FullName']
            $SenderEmail = $_POST['Email']
            $MessageSubject = $_POST['subjectTitle']
            $TheMessage = $_POST['message']


            $to = "ahmed.hady.hanfy92@gmail.com";
            $body = "";

            $body .= "From: ".$SenderName. "\r\n";
            $body .= "Email: ".$SenderEmail. "\r\n";
            $body .= "Message: ".$TheMessage. "\r\n";

            mail($to,$MessageSubject,$body);

        }
        
    }
?>