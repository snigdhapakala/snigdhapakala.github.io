<?php

//trim is the equivalent of pythonic strip, to eliminate white space
$name = trim($_POST("name"));
$email = $_POST["email"];

echo "Hello", "<br>";
echo $name , "<br>";
echo $email , "<br>";

//array
$checkbox = $_POST["attraction"];
if (!isset($checkbox)) {
	echo "None selected" , "<br>";
} else {
	foreach ($checkbox as $box ) {
	echo $box . "<br>";
}
}

// individual values
$radio = $_POST["connection"];
echo $radio;




?>