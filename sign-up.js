/*javascript outline for login page, need to find variables then can change names */

/*login, need user: can have upper or lower and digits no special characters, password: upper and lower case a digit a special character must be at least 8 digits*/

/*get some way to when submitting write CSS (turn offending one red and increase size of border) and display some words about requirements*/

function validation(){

	var val_email=document.getElementById("email1");
	var val_password1=document.getElementById("password1");
	var val_password2=document.getElementById("password2");
	
	if (val_email.length == 0){
		return false;
	}

	if (val_password1.length == 0){
		return false;
	}

	if (val_password2.length == 0){
		return false;
	}

	/*more in depth email validation will be added */

	/*password validation now*/

	var i = 0
	var lower = 0
	var upper = 0
	var digit = 0
	while (val_password1.length > i){
		
		if (val_password1.charCodeAt(i) > 47 && val_password1.charCodeAt(i) < 58){
			digit++;
			i++;
			continue;
		}else if (val_password1.charCodeAt(i) > 64 && val_password1.charCodeAt(i) < 91){
			upper++;
			i++;
			continue;
		}else if(val_password1.charCodeAt(i) > 96 && val_password1.charCodeAt(i) < 123){
			lower++;
			i++;
			continue;
		}else{
			return false;
		}
	}

	/*check if there is at least one uppercase, one lowercase, and one digit character     and if the password matches the repeat password*/

	if (lower == 0){
		return false;
	}else if (upper == 0){
		return false;
	}else if (digit == 0){
		return false;
	}else if (pass !== repeat){
		return false;
	}else{
		return true;
	}	
}
