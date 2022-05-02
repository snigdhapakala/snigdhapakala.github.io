<!DOCTYPE html>

<html lang="en">

<head>
   <title>ATX Adventures Login Page</title>
   <meta charset="UTF-8">
   <meta name="description" content="login or signup">
   <meta name="author" content="Snigdha Pakala, Stuti Gupta, Lauren Perry, Manavi Shah">
   <link rel="stylesheet" href="nav-bar.css">
   <link rel="stylesheet" href="login.css">
</head> 

<body>
   <div class = "logo"><a href="home.html"><img id = "logo" src="logo.png" alt="picture of logo" width="360" height="360"></a></div>
   <br><br><br>
   <div class="topnav">
      <ul>
         <li><a class = "headers" href="home.html">Home</a></li>
         <li><a class = "active headers" href="login.php">Login</a></li>
         <li><a class = "headers" href="recommendations.html">Recommendations</a></li>
         <li><a class = "headers" href="bucket_login.php">Bucket List</a></li>
         <li><a class = "headers" href="contact.html">Contact</a></li>
      </ul>
   </div><br><br><br>

	<div id="main">
	<p>
	<img id="picture" src="barton_springs.jpg" alt="Picture of Barton Springs" width=35% height=35%>
	</p>

<div id="form">
<?php
   session_start();
   $script = $_SERVER['PHP_SELF'];
   if ($_SESSION["attempt"] == true) {
      echo "<script> alert('Invalid Login') </script>";
   }
   if (isset($_COOKIE['email1'])) {
      echo "<label>You are logged in!</label><br>";
   } else {
      print <<<LOGIN
      <form method = "post" action = "bucket_login.php">
         <label for="email1">Email:</label><br>
         <input type="email" id="email1" name="email1"><br>

         <label for="password1">Password:</label><br>
         <input type="password" id="password1" name="password1"><br>

         <label><button>Sign In</button></label>
      </form>
LOGIN;
   }
?>

</body>
</html>
