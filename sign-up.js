/*javascript outline for login page, need to find variables then can change names */

/*login, need user: can have upper or lower and digits no special characters, password: upper and lower case a digit a special character must be at least 8 digits*/

/*get some way to when submitting write CSS (turn offending one red and increase size of border) and display some words about requirements*/

function validation(){
	var val_email=document.getElementById("email1").value;
	var val_password1=document.getElementById("password1").value;
	var val_password2=document.getElementById("password2").value;
	
	var indicator1 = 0;
	var indicator2 = 0;
	var indicator3 = 0;

	if (val_email.length == 0){
		document.getElementById("email1").style.borderColor = "red";
		document.getElementById("email1").style.borderRadius = "3px";
		document.getElementById("email1").style.borderStyle = "solid";
		document.getElementById("email1").style.borderWidth = "medium";
		
		document.getElementById("email_error").textContent = "Email field is blank";
		document.getElementById("email_error").style.color = "red";

		indicator1++;
	}else{
		document.getElementById("email1").style.borderColor = "#808080";
		document.getElementById("email1").style.borderRadius = "3px";
		document.getElementById("email1").style.borderStyle = "solid";
		document.getElementById("email1").style.borderWidth = "thin";
		document.getElementById("email_error").innerHTML = "";
	}

	if (val_password1.length == 0){
		document.getElementById("password1").style.borderColor = "red";
		document.getElementById("password1").style.borderRadius = "3px";
		document.getElementById("password1").style.borderStyle = "solid";
		document.getElementById("password1").style.borderWidth = "medium";

		document.getElementById("password1_error").textContent = "Password field is blank";
		document.getElementById("password1_error").style.color = "red";
		indicator2++;

	}else{
		document.getElementById("password1").style.borderColor = "#808080";
		document.getElementById("password1").style.borderRadius = "3px";
		document.getElementById("password1").style.borderStyle = "solid";
		document.getElementById("password1").style.borderWidth = "thin";
		document.getElementById("password1_error").innerHTML = "";
	}

	if (val_password2.length == 0){
		document.getElementById("password2").style.borderColor = "red";
		document.getElementById("password2").style.borderRadius = "3px";
		document.getElementById("password2").style.borderStyle = "solid";
		document.getElementById("password2").style.borderWidth = "medium";

		document.getElementById("password2_error").textContent = "Password field is blank";
		document.getElementById("password2_error").style.color = "red";

		indicator3++;

	}else{
		document.getElementById("password2").style.borderColor = "#808080";
		document.getElementById("password2").style.borderRadius = "3px";
		document.getElementById("password2").style.borderStyle = "solid";
		document.getElementById("password2").style.borderWidth = "thin";
		document.getElementById("password2_error").innerHTML = "";
	}

	if (indicator1 == 1 || indicator2 == 1 || indicator3 == 1){
		return false;
	}

	indicator1 = 0;
	indicator2 = 0;
	indicator3 = 0;

	/*more in depth email validation will be added later*/

	/*password validation now*/

	var i = 0
	var lower = 0
	var upper = 0
	var digit = 0
	while (val_password1.length > i){
		
		if (val_password1.charCodeAt(i) > 47 && val_password1.charCodeAt(i) < 58){
			digit++;
			i++;
			document.getElementById("password1").style.borderColor = "#808080";
			document.getElementById("password1").style.borderRadius = "3px";
			document.getElementById("password1").style.borderStyle = "solid";
			document.getElementById("password1").style.borderWidth = "thin";
			document.getElementById("password1_error").innerHTML = "";

			continue;
		}else if (val_password1.charCodeAt(i) > 64 && val_password1.charCodeAt(i) < 91){
			upper++;
			i++;
			document.getElementById("password1").style.borderColor = "#808080";
			document.getElementById("password1").style.borderRadius = "3px";
			document.getElementById("password1").style.borderStyle = "solid";
			document.getElementById("password1").style.borderWidth = "thin";
			document.getElementById("password1_error").innerHTML = "";

			continue;
		}else if(val_password1.charCodeAt(i) > 96 && val_password1.charCodeAt(i) < 123){
			lower++;
			i++;
			document.getElementById("password1").style.borderColor = "#808080";
			document.getElementById("password1").style.borderRadius = "3px";
			document.getElementById("password1").style.borderStyle = "solid";
			document.getElementById("password1").style.borderWidth = "thin";
			document.getElementById("password1_error").innerHTML = "";

			continue;
		}else{
			document.getElementById("password1").style.borderColor = "red";
			document.getElementById("password1").style.borderRadius = "3px";
			document.getElementById("password1").style.borderStyle = "solid";
			document.getElementById("password1").style.borderWidth = "medium";

			document.getElementById("password1_error").textContent = "Invalid password";
			document.getElementById("password1_error").style.color = "red";

			indicator1++;
			break;
		}
	}

	/*check if there is at least one uppercase, one lowercase, and one digit character     and if the password matches the repeat password*/

	if (lower == 0){
		document.getElementById("password1").style.borderColor = "red";
		document.getElementById("password1").style.borderRadius = "3px";
		document.getElementById("password1").style.borderStyle = "solid";
		document.getElementById("password1").style.borderWidth = "medium";

		document.getElementById("password1_error").textContent = "Invalid password, must include upper and lower case letters and a digit";
		document.getElementById("password1_error").style.color = "red";

		return false;
	}else if (upper == 0){
		document.getElementById("password1").style.borderColor = "red";
		document.getElementById("password1").style.borderRadius = "3px";
		document.getElementById("password1").style.borderStyle = "solid";
		document.getElementById("password1").style.borderWidth = "medium";

		document.getElementById("password1_error").textContent = "Invalid password, must include upper and lower case letters and a digit";
		document.getElementById("password1_error").style.color = "red";

		return false;
	}else if (digit == 0){
		document.getElementById("password1").style.borderColor = "red";
		document.getElementById("password1").style.borderRadius = "3px";
		document.getElementById("password1").style.borderStyle = "solid";
		document.getElementById("password1").style.borderWidth = "medium";

		document.getElementById("password1_error").textContent = "Invalid password, must include upper and lower case letters and a digit";
		document.getElementById("password1_error").style.color = "red";

		return false;
	}else if (val_password1 !== val_password2){
		document.getElementById("password2").style.borderColor = "red";
		document.getElementById("password2").style.borderRadius = "3px";
		document.getElementById("password2").style.borderStyle = "solid";
		document.getElementById("password2").style.borderWidth = "medium";

		document.getElementById("password2_error").textContent = "Password must match";
		document.getElementById("password2_error").style.color = "red";

		return false;
	}else{
		return true;
	}	
}
