<!DOCTYPE html>

<html lang="en">

<head>
   <title>ATX Adventures Bucket List</title>
   <meta charset="UTF-8">
   <meta name="description" content="Coding up the basics of our website's bucket list">
   <meta name="author" content="Snigdha Pakala, Stuti Gupta, Lauren Perry, Manavi Shah">
   <link rel="stylesheet" href="nav-bar.css">
   <link rel="stylesheet" href="bucket-list.css">
</head> 

<body>
   <div class = "logo"><a href="home.html"><img id = "logo" src="logo.png" alt="picture of logo" width="360" height="360"></a></div>
   <br><br><br>
   <div class="topnav">
      <ul>
         <li><a class = "headers" href="home.html">Home</a></li>
         <li><a class = "headers" href="login.php">Login</a></li>
         <li><a class = "headers" href="recommendations.html">Recommendations</a></li>
         <li><a class = "active headers" href="bucket_login.php">Bucket List</a></li>
         <li><a class = "headers" href="contact.html">Contact</a></li>
      </ul>
   </div>
   <?php
      error_reporting(E_ALL);
      ini_set("display_errors", "on");
      $script = $_SERVER['PHP_SELF'];

      print <<<TOP
      <div id="leftnav" style="font-size: 17px;">
         <h1 style="text-align:center">Filter:</h1>
         <form style="margin-left:35%" method = "POST" action = "$script">
            <label><input name = "filter" type = "radio" value = "outdoor"> Outdoor </label> <br>
            <label><input name = "filter" type = "radio" value = "bar"> Bar </label><br>
            <label><input name = "filter" type = "radio" value = "foodtruck"> Food Truck </label><br>
            <label><input name = "filter" type = "radio" value = "dinein"> Dine In </label><br>
            <label><input name = "filter" type = "radio" value = "art"> Art </label><br><br>
            <td><input name = 'filtered' type = 'submit' value = 'Submit' /></td>
         </form>
         <h2 style="text-align:center">Insert Event:</h2>
         <form style="margin-left:15%" method = "POST" action = "$script">
            <label> Name: <input name = "name" type = "text" required/> </label><br>
            <label> Date: <input name = "date" type = "date" required/> <b style="font-size:10px"> *12/31/1999 for anytime</b></label><br>
            <label> Type: </label><br>
            <label><input name = "activitytype" type = "radio" value = "outdoor" required/> Outdoor </label><br>
				<label><input name = "activitytype" type = "radio" value = "bar" /> Bar </label><br>
				<label><input name = "activitytype" type = "radio" value = "foodtruck" /> Food Truck </label><br>
				<label><input name = "activitytype" type = "radio" value = "dinein" /> Dine In </label><br>
				<label><input name = "activitytype" type = "radio" value = "art" /> Art </label><br>
            <label> Location: <input name = "location" type = "text" required/> </label><br>
            <label> Description: <input name = "description" type = "text" required/> </label><br><br>
            <td><input name = 'newevent' type = 'submit' value = 'Submit' /></td>
         </form>
      </div>
      <div id="content">
         <h1 style = "text-align:center">Bucket List</h1>
TOP;
      if (!isset($_COOKIE['email1'])) {
         header("Location: login.html");
      } else {
         $email = $_COOKIE['email1'];
         $user = explode("@", $email)[0];

         $server = "spring-2022.cs.utexas.edu";
         $dbuser = "cs329e_bulko_manavi56";
         $pwd = "salty7Gorge&font";
         $dbName = "cs329e_bulko_manavi56";
         
         $mysqli = new mysqli ($server, $dbuser, $pwd, $dbName);

         // If it returns a non-zero error number, print a message and stop execution immediately
         if ($mysqli->connect_errno) {
               die('Connect Error: ' . $mysqli->connect_errno . ": " . $mysqli->connect_error);
         } 

         if (isset($_POST['newevent'])) {
            $e_name = $_POST['name'];
            $e_date = $_POST['date'];
            $e_type = $_POST['activitytype'];
            $e_location = $_POST['location'];
            $e_description = $_POST['description'];
            //insert into events table

            $command = "INSERT INTO events (e_name, e_date, e_type, e_location, e_description) VALUES (\"$e_name\", \"$e_date\", \"$e_type\", \"$e_location\", \"$e_description\");";
            $mysqli->query($command);

            //get the new event's id
            $command2 = "SELECT e_id FROM events WHERE e_name = \"$e_name\";";
            $result = $mysqli->query($command2);

            while ($row = $result->fetch_row()) {
               $new_id = $row[0];
            }

            //put new event's id into user's bucket list table
            $command3 = "INSERT INTO $user VALUES ($new_id);";
            $mysqli->query($command3);
         }

         if (isset($_POST['filter'])) {
            $chosenfilter = $_POST['filter'];
            $command = "SELECT e_name, e_date, e_type, e_location, e_description FROM events JOIN $user ON e_id = id WHERE e_type = \"$chosenfilter\";";
         } else {
            $command = "SELECT e_name, e_date, e_type, e_location, e_description FROM events JOIN $user ON e_id = id;";
         }
         
         $result = $mysqli->query($command);
         
         if($result->num_rows === 0) {
               echo "<br><h3>Bucket List Empty</h3>";
         } else {
               echo "<table>
                     <tr>
                        <th> Name </th>
                        <th> Date </th>
                        <th> Type </th>
                        <th> Location </th>
                        <th> Description </th>
                     </tr>";
               while ($row = $result->fetch_row()) {
                  if ($row[1] == "9999-12-31") {
                     $location = "Anytime";
                  } else {
                     $location = $row[1];
                  }
                  echo "<tr> 
                           <td> $row[0] </td> 
                           <td> $location </td>
                           <td> $row[2] </td>
                           <td> $row[3] </td>
                           <td> $row[4] </td>
                        </tr>";
               }
               echo "</table> <br>";
         }
      }
            
   ?>
   </div>
</body>

</html>
