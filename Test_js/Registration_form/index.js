var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("error");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

$( document ).ready(function() {
           $('#s-h-pass').click(function(){
               var type = $('#password').attr('type') == "text" ? "password" : 'text',
                   c = $(this).html() == "<span class=\"glyphicon glyphicon-eye-close\" title=\"Скрыть пароль\"></span>" ? "<span class=\"glyphicon glyphicon-eye-open\" title=\"Показать пароль\"></span>" : "<span class=\"glyphicon glyphicon-eye-close\" title=\"Скрыть пароль\"></span>";
               $(this).html(c);
               $('#password').prop('type', type);
           });
       });