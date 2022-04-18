<?php
if (!isset($_COOKIE['email1']) && !isset($_COOKIE['password1'])){
	// go to login page, maybe force login?
	if (!isset($_POST['email1']) && !isset($_POST['password1'])){
		readfile("login.html");
	}

	// go to login, after submit form, then validation stuff and comp w existing
	// if login successfully, then go to bucket list page 

	if (isset($_POST['email1']) && isset($_POST['password1'])){
		/* go through now and compare existing usernames and passwords then set cookies
	   	go to bucket list now, shows up when logged in*/
		$file = fopen ("passwd.txt", "r");
		$pairs = [];
		while (!feof($file)) {
			$line = fgets($file);
			$full_cookie = explode(":", $line);
			$saved_email = $full_cookie[0]; 
			$saved_password = rtrim($full_cookie[1]);
			$pairs[$saved_email] = $saved_password;
		}
		fclose ($file);

		$input_email = $_POST["email1"];
		$input_password = $_POST["password1"];
		if (array_key_exists($input_email, $pairs)) {
			if ($input_password === $pairs[$input_email]) {
				setcookie("email1", $_POST['email1'], time()+10,"/");
				readfile("bucket-list.html");
			} else {
				echo "<script>alert('Incorrect Password')</script>";
				readfile("login.html");
			}
		} else {
				echo "<script>alert('Invalid Email')</script>";
				readfile("login.html");
		}

	}
} else {
    readfile("bucket-list.html");
}
?>