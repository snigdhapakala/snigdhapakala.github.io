/* contact form validation using javascript */

/* Email validation will be done once we know how to use regular expressions to look for email patterns */

function validation(){
	/*window.alert("this is working")*/
	var val_name1=document.getElementById("name1").value;
	var val_email1=document.getElementById("email1").value;
	var val_subject=document.getElementById("subject").value;
	var val_message=document.getElementById("message").value;
	
	var indicator1 = 0;
	var indicator2 = 0;
	var indicator3 = 0;
	var indicator4 = 0;

	if (val_name1.length == 0){
		/*change HTML to display error*/
		document.getElementById("name1").style.borderColor = "red";
		document.getElementById("name1").style.borderRadius = "3px";
		document.getElementById("name1").style.borderStyle = "solid";
		document.getElementById("name1").style.borderWidth = "medium";
		
		document.getElementById("name_error").textContent = "Name field is blank";
		document.getElementById("name_error").style.color = "red";

		indicator1++;

	}else{
		document.getElementById("name1").style.borderColor = "#808080";
		document.getElementById("name1").style.borderRadius = "3px";
		document.getElementById("name1").style.borderStyle = "solid";
		document.getElementById("name1").style.borderWidth = "thin";
		document.getElementById("name_error").innerHTML = "";

	}

	if (val_email1.length == 0){
		/*change HTML to display error*/
		document.getElementById("email1").style.borderColor = "red";
		document.getElementById("email1").style.borderRadius = "3px";
		document.getElementById("email1").style.borderStyle = "solid";
		document.getElementById("email1").style.borderWidth = "medium";

		document.getElementById("email_error").textContent = "Email field is blank";
		document.getElementById("email_error").style.color = "red";

		indicator2++;
	}else{
		document.getElementById("email1").style.borderColor = "#808080";
		document.getElementById("email1").style.borderRadius = "3px";
		document.getElementById("email1").style.borderStyle = "solid";
		document.getElementById("email1").style.borderWidth = "thin";
		document.getElementById("email_error").innerHTML = ""

	}

	if (val_subject.length == 0){
		/*change HTML to display error*/
		document.getElementById("subject").style.borderColor = "red";
		document.getElementById("subject").style.borderRadius = "3px";
		document.getElementById("subject").style.borderStyle = "solid";
		document.getElementById("subject").style.borderWidth = "medium";

		document.getElementById("subject_error").textContent = "Subject field is blank";
		document.getElementById("subject_error").style.color = "red";

		indicator3++;
	}else{
		document.getElementById("subject").style.borderColor = "#808080";
		document.getElementById("subject").style.borderRadius = "3px";
		document.getElementById("subject").style.borderStyle = "solid";
		document.getElementById("subject").style.borderWidth = "thin";
		document.getElementById("subject_error").innerHTML = "";
	}

	if (val_message.length == 0){
		/*change HTML to display error*/
		document.getElementById("message").style.borderColor = "red";
		document.getElementById("message").style.borderRadius = "3px";
		document.getElementById("message").style.borderStyle = "solid";
		document.getElementById("message").style.borderWidth = "medium";

		document.getElementById("message_error").textContent = "Message field is blank";
		document.getElementById("message_error").style.color = "red";

		indicator4++;
	}else{
		document.getElementById("message").style.borderColor = "#808080";
		document.getElementById("message").style.borderRadius = "3px";
		document.getElementById("message").style.borderStyle = "solid";
		document.getElementById("message").style.borderWidth = "thin";
		document.getElementById("message_error").innerHTML = "";
	}

	if (indicator1 == 1 || indicator2 == 1 || indicator3 == 1 || indicator4 == 1){
		return false;
	}
	
	/*loop through name provided*/
	indicator1 = 0;
	indicator2 = 0;
	indicator3 = 0;
	indicator4 = 0;

	var i = 0;
	while (val_name1.length > i){
		if (val_name1.charCodeAt(i) > 64 && val_name1.charCodeAt(i) < 91){
			i++;
			document.getElementById("name1").style.borderColor = "#808080";
			document.getElementById("name1").style.borderRadius = "3px";
			document.getElementById("name1").style.borderStyle = "solid";
			document.getElementById("name1").style.borderWidth = "thin";
			document.getElementById("name_error").innerHTML = "";
			continue;
		}else if (val_name1.charCodeAt(i) > 96 && val_name1.charCodeAt(i) < 123){
			document.getElementById("name1").style.borderColor = "#808080";
			document.getElementById("name1").style.borderRadius = "3px";
			document.getElementById("name1").style.borderStyle = "solid";
			document.getElementById("name1").style.borderWidth = "thin";
			document.getElementById("name_error").innerHTML = "";
			i++;
			continue;
		}else{
			/*insert css for error and HTML for error*/
			document.getElementById("name1").style.borderColor = "red";
			document.getElementById("name1").style.borderRadius = "3px";
			document.getElementById("name1").style.borderStyle = "solid";
			document.getElementById("name1").style.borderWidth = "medium";

			document.getElementById("name_error").textContent = "Invalid name";
			document.getElementById("name_error").style.color = "red";

			indicator1++;
			break;
		}
	}
	
	/*loop through with email validation, uses regex so make sure to bring up to team that we have not learned it yet, but that we will learn it in two weeks so maybe just add a note here that email validation is not something we know how to do
	var email_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	
	if (val_email1.value.match(email_format)){
		return true;
	}else{
		put HTML about error
		document.form1.email1.focus();
		return false;
	}*/

	/*go through subject line validation*/
	var j = 0;
	while (val_subject.length > j){
		if (val_subject.charCodeAt(j) > 31 && val_subject.charCodeAt(j) < 127){
			j++;
			document.getElementById("subject").style.borderColor = "#808080";
			document.getElementById("subject").style.borderRadius = "3px";
			document.getElementById("subject").style.borderStyle = "solid";
			document.getElementById("subject").style.borderWidth = "thin";
			document.getElementById("subject_error").innerHTML = "";

			continue;

		}else{
			document.getElementById("subject").style.borderColor = "red";
			document.getElementById("subject").style.borderRadius = "3px";
			document.getElementById("subject").style.borderStyle = "solid";
			document.getElementById("subject").style.borderWidth = "medium";
			document.getElementById("subject_error").textContent = "Invalid subject line";
			document.getElementById("subject_error").style.color = "red";

			indicator3++;
			break;
		}
	}

	/*go through message validation*/
	var k = 0
	while (val_message.length > k){
		if (val_message.charCodeAt(k) > 31 && val_message.charCodeAt(k) < 127){
			k++;
			document.getElementById("message").style.borderColor = "#808080";
			document.getElementById("message").style.borderRadius = "3px";
			document.getElementById("message").style.borderStyle = "solid";
			document.getElementById("message").style.borderWidth = "thin";
			document.getElementById("message_error").innerHTML = "";


			continue;
		}else{	
			document.getElementById("message").style.borderColor = "red";
			document.getElementById("message").style.borderRadius = "3px";
			document.getElementById("message").style.borderStyle = "solid";
			document.getElementById("message").style.borderWidth = "medium";
			document.getElementById("message_error").textContent = "Invalid message"
			document.getElementById("message_error").style.color = "red";

			indicator4++;
			break;
		}
	}
	if (indicator1 == 1 || indicator2 == 1 || indicator3 == 1 || indicator4 == 1){
		return false;
	}
	indicator1 = 0;
	indicator2 = 0;
	indicator3 = 0;
	indicator4 = 0;
	i = 0;
	j = 0;
	k = 0;

	return true;
}

/*reset button function to clear all CSS and HTML elements added*/
function reset_form(){
	document.getElementById("name1").style.borderColor = "#808080";
	document.getElementById("name1").style.borderRadius = "3px";
	document.getElementById("name1").style.borderStyle = "solid";
	document.getElementById("name1").style.borderWidth = "thin";
	document.getElementById("name_error").innerHTML = "";

	document.getElementById("email1").style.borderColor = "#808080";
	document.getElementById("email1").style.borderRadius = "3px";
	document.getElementById("email1").style.borderStyle = "solid";
	document.getElementById("email1").style.borderWidth = "thin";
	document.getElementById("email_error").innerHTML = "";

	document.getElementById("message").style.borderColor = "#808080";
	document.getElementById("message").style.borderRadius = "3px";
	document.getElementById("message").style.borderStyle = "solid";
	document.getElementById("message").style.borderWidth = "thin";
	document.getElementById("subject_error").innerHTML = "";

	document.getElementById("subject").style.borderColor = "#808080";
	document.getElementById("subject").style.borderRadius = "3px";
	document.getElementById("subject").style.borderStyle = "solid";
	document.getElementById("subject").style.borderWidth = "thin";
	document.getElementById("message_error").innerHTML = "";

}

