// Assignment Code
var generateBtn = document.querySelector("#generate");

var howMany= function(type, length, maxlength){
  console.log(length);
  console.log(maxlength);
  var output = prompt("How many " + type + " do you want in your password?");
  output = parseInt(output);
  if((output + length) > maxlength ){
    alert("Your input makes the password to long.");
    howMany(type, length, maxlength);
  }else{
    console.log(output, type);
    return output;
  }
}

var generatePassword = function(totalLength, capitalLength, vowelLength, numberLength, specialLength){





}



// Write password to the #password input
function writePassword() {
  currentLength = 0;

  passwordLength = prompt("how long do you want your password to be?");
  passwordLength = parseInt(passwordLength);
  if (passwordLength >= 8 && passwordLength <= 128){
    console.log("Password length:" + passwordLength);
    console.log("current length" + currentLength);

    capitals = howMany("capital letters", currentLength, passwordLength);
    currentLength += capitals;

    vowels = howMany("vowels", currentLength, passwordLength);
    currentLength += vowels;

    numbers = howMany("numbers", currentLength, passwordLength);
    currentLength += numbers;

    specialChars = howMany("special characters", currentLength, passwordLength);
    currentLength += specialChars;
    

    var password = generatePassword(passwordLength, capitals, vowels, numbers, specialChars);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;





  }
  else{
    alert("Your password does not meet the length requirements! Enter a number between 8 and 128");
  }


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
