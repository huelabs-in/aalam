<?php 
	$email=$_POST['email'];
	$name=$_POST['name'];
	$messages=$_POST['message'];
//	$to = "info@omniprinters.co.in";
 	$to = "manaskumar7736@gmail.com";
	$subject = "Contact Us";
	$message = 'Name : '.$name. "\n";
	$message .= 'Email : '.$email. "\n";
	$message .= 'Message : '.$messages;
    if(!empty( $email ) && !empty( $name  ))
    {
        if(mail($to,$subject,$message)){
		 echo 'true';
    	}else{
    		echo 'qq';
    	}
    }
    else{
        echo 'false';
    }
	
?>