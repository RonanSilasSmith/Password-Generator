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
  finalPassword = [];
  placeInPassword = 0;
  var character = "";


  for(i = 0; i < capitalLength; i += 0){
    character = prompt("Which capital letters do you want to add? " + capitalLength + " capitals remaining.");
    if(true === true){
      capitalLength -= 1;
      finalPassword[placeInPassword] = character;
      placeInPassword ++;
      
    }
    else{
      alert("That input is not a capital letter");
    }
  }

  for(i = 0; i < vowelLength; i){
    character = prompt("Which vowels do you want to add? " + vowelLength + " vowels remaining.");
    if(true === true){
      vowelLength -= 1;
      finalPassword[placeInPassword] = character;
      placeInPassword ++;
      
    }
    else{
      alert("That input is not a vowel");
    }
  } 


  for(i = 0; i < numberLength; i){
    character = prompt("Which numbers do you want to add? " + numberLength + " numbers remaining.");
    if(true === true){
      numberLength -= 1;
      finalPassword[placeInPassword] = character;
      placeInPassword ++;
      
    }
    else{
      alert("That input is not a number");
    }
  } 

  for(i = 0; i < specialLength; i){
    character = prompt("Which special characters do you want to add? " + specialLength + " specials remaining.");
    if(true === true){
      specialLength -= 1;
      finalPassword[placeInPassword] = character;
      placeInPassword ++;
      
    }
    else{
      alert("That input is not a special character");
    }
  } 

 

    

  
    return finalPassword;


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
