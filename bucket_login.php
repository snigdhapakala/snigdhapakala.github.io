<?php
session_start();
if (!isset($_COOKIE['email1']) && !isset($_COOKIE['password1'])){
	// go to login page, maybe force login?
	if (!isset($_POST['email1']) && !isset($_POST['password1'])){
		header("Location: login.php");
	}

	// go to login, after submit form, then validation stuff and compare w existing
	// if login successfully, then go to bucket list page 
	if (isset($_POST['email1']) && isset($_POST['password1'])){
		// go through now and compare existing usernames and passwords then set cookies and go to bucket list
		$server = "spring-2022.cs.utexas.edu";
		$user = "cs329e_bulko_manavi56";
		$pwd = "salty7Gorge&font";
		$dbName = "cs329e_bulko_manavi56";
	
		// Connect to MySQL Server
		$mysqli = new mysqli($server, $user, $pwd, $dbName);
	
		if ($mysqli->connect_errno) {
			die('Connect Error: ' . $mysqli->connect_errno . ": " .  $mysqli->connect_error);
		}

		//Select Database
		$mysqli->select_db($dbName) or die($mysqli->error);
	
		// Retrieve data 
		$email = $_POST["email1"];
		$password = $_POST["password1"];
	
		// Escape User Input to help prevent SQL Injection
		$email = $mysqli->real_escape_string($email);
		$password = $mysqli->real_escape_string($password);
	
		//build and execute query
		$query = "SELECT * FROM users WHERE email = '$email';";
		$result = $mysqli->query($query);
		
		// if username doesn't exist, add username and password to database
		if ($result->num_rows === 0) {
			$_SESSION['attempt'] = true;
			header("Location: login.php");
		} else {
			$result2 = $mysqli->query("SELECT * FROM users WHERE email = '$email' AND password = '$password';");
			if ($result2->num_rows === 0) {
				$_SESSION['attempt'] = true;
				header("Location: login.php");
			} else {
				$_SESSION['attempt'] = false;
				setcookie("email1", $_POST['email1'], time()+(15*60),"/");
				header("Location: bucket-list.php");
			}
		}
	}
} else {
    header("Location: bucket-list.php");
}
?>