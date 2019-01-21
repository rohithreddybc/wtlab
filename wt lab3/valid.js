/* function fun()
{
	var userv=document.forms[0].user.value;
	var pwdv=document.forms[0].pwd.value;
	var emailv=document.forms[0].email.value;
	var phv=document.forms[0].ph.value;
	
	var userreg=new RegExp("[a-zA-Z]*");
	var emailreg=new RegExp("[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,3}");
	var phreg=new RegExp("^[0-9]{10}");
	
	var ruser=userreg.exec(userv);
	var remail=emailreg.exec(emailv);
	var rph=phreg.exec(phv);
	
	
	if((ruser.length>6)&&remail&&rph&& (pwdv.length>6))
	{
			
					alert("All values are valid");
					return true;
	}
	else{
		         if(userv.lengthv<6)
				 {
					 alert("user name invalid");
					 document.forms[0].user.focus();
				 }
				  if(pwdv.lengthv<6)
				 {
					 alert("password invalid");
					 document.forms[0].pwd.focus();
				 }
				  if(!remail)
				 {
					 alert("email invalid");
					 document.forms[0].email.focus();
				 }
				  if(!rph)
				 {
					 alert("phone number invalid");
					 document.forms[0].ph.focus();
				 }
			return false;
		}
}
					 