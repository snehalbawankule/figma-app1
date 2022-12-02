export function formValidate(){
    var password = document.getElementById("pass10"), confirm_password = document.getElementById("pass20");
  
  function validatePassword(){
    if(password.value !== confirm_password.value) {
      confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
      confirm_password.setCustomValidity('');
    }
  } 
  password.onchange = validatePassword;
  confirm_password.onkeyup = validatePassword; 
}  