var password = prompt('Please enter a password');
var hasUppercase = false;
var hasLowercase = false;
var isLongEnough = false;
var hasSpecialCharacter = false;
function findUppercase(){
  for(var i = 0;  i < password.length; i++){
    if (password[i] === password[i].toUpperCase()){
      hasUppercase = true;
    }else if(hasUppercase === false){
      console.log('Please have an uppercase in your password!');
    }
    
  }
}
function findLowercase(){
  for (var i =0; i < password.length; i++){
    if (password[i] === password[i].toLowerCase()){
      hasLowercase = true;
    }else if(hasLowercase === false){
      console.log('Please use a lower case in your password!');
    }
  }
  
}
function findLength(){
  if(password.length >= 8){
    isLongEnough = true;
  }else {
    console.log('Password length is too short!');
  }
  
}
function findSpecialCharacter(){
  var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*'];
  for(var i =0; i < password.length; i++)
{
  for(var j = 0; j < specialCharacters.length; j++){
   if (password[i] === specialCharacters[j])
     {
       hasSpecialCharacter = true;
     } else {
       console.log('Please use special characters!');
     }
  }
  
}  
}
function validatePassword()
{
  findUppercase();
  findLowercase();
  findSpecialCharacter();
  findLength();
  
  if(hasUppercase && hasLowercase && isLongEnough && hasSpecialCharacter)
    {
      console.log('Your password meets all the requirements!');
    }
}
validatePassword();