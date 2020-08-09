// Assignment Code
var generateBtn = document.querySelector("#generate");

var howMany= function(type, length, maxlength){
  if(length === maxlength){
    return 0;
  }
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

//tried to look around for how to shuffle an array, found this on stack overflow and it was the most reasonable feeling way to do this
var shuffle = function(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}

var generatePassword = function(totalLength, capitalLength, vowelLength, numberLength, specialLength){
  finalPassword = [];
  placeInPassword = 0;
  var character = "f";
  var capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var vowels = "aeiouAEIOU";
  var numbers = "123456789";
  var specials = "!@#$%^&*(()_+=-[]\';/.,<?':"
  totalLength -= (specialLength + numberLength + vowelLength + capitalLength);


  for(i = 0; i < capitalLength; i += 0){
    character = prompt("Which capital letters do you want to add? " + capitalLength + " capitals remaining.");
    if(capitals.indexOf(character[0]) !== -1){
      capitalLength -= 1;
      finalPassword[placeInPassword] = character[0];
      placeInPassword ++;
      
    }
    else{
      alert("That input is not a capital letter");
    }
  }

  for(i = 0; i < vowelLength; i){
    character = prompt("Which vowels do you want to add? " + vowelLength + " vowels remaining.");
    if(vowels.indexOf(character[0]) !== -1){
      vowelLength -= 1;
      finalPassword[placeInPassword] = character[0];
      placeInPassword ++;
      
    }
    else{
      alert("That input is not a vowel");
    }
  } 


  for(i = 0; i < numberLength; i){
    character = prompt("Which numbers do you want to add? " + numberLength + " numbers remaining.");
    if(numbers.indexOf(character[0]) !== -1){
      numberLength -= 1;
      finalPassword[placeInPassword] = character[0];
      placeInPassword ++;
    }
    else{
      alert("That input is not a number");
    }
  } 

  for(i = 0; i < specialLength; i){
    character = prompt("Which special characters do you want to add? " + specialLength + " specials remaining.");
    if(specials.indexOf(character[0]) !== -1){
      specialLength -= 1;
      finalPassword[placeInPassword] = character[0];
      placeInPassword ++;
      
    }
    else{
      alert("That input is not a special character");
    }
  } 



  for(i = 0; i < totalLength; i){
    character = prompt("You have " + totalLength + " characters to add, what do you add?");
    finalPassword[placeInPassword] = character[0];
    placeInPassword ++;
    totalLength --;
  }

  finalPassword = shuffle(finalPassword);
  var stringFinalPassword = finalPassword.join("");
  
    return stringFinalPassword;


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
