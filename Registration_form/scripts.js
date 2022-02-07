function isPasswordMatch() { 
   var password = $("#txtPassword").val(); 
   var confirmPassword = $("#txtConfirmPassword").val(); 
 
   if (password != confirmPassword) $("#divCheckPassword").html("Passwords do not match!"); 
   else $("#divCheckPassword").html("Passwords match."); 
} 
 
$(document).ready(function () { 
   $("#txtConfirmPassword").keyup(isPasswordMatch); 
}); 