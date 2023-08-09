// Assignment code here

// generate prompt to obtain user input for password length
function passwordLen(){
  var passLen = prompt("Choose a password length of at least 8 characters long and no more than 128 characters.");
  
  // input validation
  if(passLen < 8 || passLen > 128){
    alert("Please enter a number greater than 8 characters and less than 128 characters.");
    passwordLen();
  }
    // error prompt
  else{
    return console.log(passLen);
  }
}
// generate prompt to obtain user input if lowercase letters is desired
function incLower(){
  var lowerChar = prompt("Would you like you include lowercase characters? Enter 'Y' for yes 'N' for no");

  // input validation
  if(lowerChar === "y" || lowerChar === "Y"){
    return (String.fromCharCode(Math.floor(Math.random() * 26) + 97));
  }
  else if(lowerChar === "n" || lowerChar === "N"){
    return console.log(lowerChar);

  }
    // error prompt
  else{
    alert("Invalid input.");
    incLower();
  }
}

// generate prompt to obtain user input if upper case letter are desired
function incUpper(){
  var upperChar = prompt("Would you like you include uppercase characters? Enter 'Y' for yes 'N' for no");

  // input validation 
  if(upperChar === "y" || upperChar === "Y"){
    return (String.fromCharCode(Math.floor(Math.random() * 26) + 65));
  }
  else if(upperChar === "n" || upperChar === "N"){
    return console.log(upperChar);
  }
    // error prompt
  else{
    alert("Invalid input.");
    incUpper();
  }
}

// generate prompt to obtain user input if numbers desired
function incNum(){
  var numChar = prompt("Would you like you include numeric characters? Enter 'Y' for yes 'N' for no");

  // input validation
  if(numChar === "y" || numChar === "Y"){
    return (String.fromCharCode(Math.floor(Math.random() * 10) + 48));
  }
  else if(numChar === "n" || numChar === "N"){
    return console.log(numChar);
  }
    // error prompt
  else{
    alert("Invalid input.");
    incNum();
  }
}

// generate prompt to obtain user input if special characters desired
function incSpec(){
  var specChar = prompt("Would you like you include special characters? Enter 'Y' for yes 'N' for no");

  // input validation
  if(specChar === "y" || specChar === "Y"){
    var symbols = '!@#$%^&*(){}[]<>=/,.';
    return symbols [Math.floor(Math.random() * symbols.length)];
  }
  else if(specChar === "n" || specChar === "N"){
    return console.log(specChar);
  }
  // error prompt
  else{
    alert("Invalid input.");
    incSpec();
  }

}
function generatePassword(){
  passwordLen();
  incLower();
  incUpper();
  incNum();
  incSpec();

  // var pwGen = '';
  // for( var i = 0; i < length; i++){

  // }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

