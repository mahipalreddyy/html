function validatemyform() {

	var emailfilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	var passfilter=  /^[A-Za-z]\w{7,14}$/; 


	if (document.getElementById("txtfname").value == ""){
	document.getElementById("errorfname").style.display ="block";
	document.getElementById("txtfname").style.border = "1px blue solid";
}
	else if (document.getElementById("txtlname").value == ""){
	document.getElementById("errorlname").style.display ="block";
	document.getElementById("txtlname").style.border = "1px blue solid";
	
	document.getElementById("errorfname").style.display ="none";
	document.getElementById("txtfname").style = "none";
}
 
	else if(document.getElementById("txtemail").value != ""){
	if(!emailfilter.test(document.getElementById("txtemail").value)){
	
	document.getElementById("erroremail1").style.display ="block";
	document.getElementById("txtemail").style = "1px blue solid";
}

	else if(document.getElementById("pass").value != ""){
	if(!passlfilter.test(document.getElementById("pass").value)){
	
	document.getElementById("errorpass1").style.display ="block";
	document.getElementById("pass").style = "1px blue solid";

	document.getElementById("erroremail1").style.display ="none";
	document.getElementById("txtemail").style = "none";
	
}

	else if (document.getElementById("txtmobile").value == ""){
	document.getElementById("errormobile").style.display ="block";
	document.getElementById("txtmobile").style.border = "1px blue solid";
	
	document.getElementById("errorpassword").style.display ="none";
	document.getElementById("pass").style = "none";
	
	document.getElementById("errorpass1").style.display ="none";
	document.getElementById("pass").style = "none";
}
	else if (document.getElementById("ddlmonths").value == "0"){
	document.getElementById("errormonths").style.display ="block";
	document.getElementById("ddlmonths").style.border = "1px blue solid";
	
	document.getElementById("errormobile").style.display ="none";
	document.getElementById("txtmobile").style = "none";
}
	else if (document.getElementById("txtday").value == ""){
	document.getElementById("errorday").style.display ="block";
	document.getElementById("txtday").style.border = "1px blue solid";
	
	document.getElementById("errormonths").style.display ="none";
	document.getElementById("ddlmonths").style = "none";
}
	else if (document.getElementById("txtyear").value == ""){
	document.getElementById("erroryear").style.display ="block";
	document.getElementById("txtyear").style.border = "1px blue solid";
	
	document.getElementById("errorday").style.display ="none";
	document.getElementById("txtday").style = "none";
}
	else { document.getElementById("erroryear").style.display ="none";
	document.getElementById("txtyear").style = "none";
}
}
	else { document.getElementById("erroremail").style.display ="block";
	document.getElementById("txtemail").style.border = "1px blue solid";
	
	document.getElementById("errorlname").style.display ="none";
	document.getElementById("txtlname").style = "none";

	document.getElementById("errorpassword").style.display ="block";
	document.getElementById("pass").style.border = "1px blue solid";
	
	document.getElementById("erroremail").style.display ="none";
	document.getElementById("txtemail").style = "none";

	
}
