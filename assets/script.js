// Assignment code here

// generate prompt to obtain user input for password length
function passwordLen(){

  var passLen = parseInt(prompt("Choose a password length of at least 8 characters long and no more than 128 characters."));
  
  // input validation
  if(passLen < 8 || passLen > 128 || isNaN(passLen)){

    alert("Please enter a number greater than 8 characters and less than 128 characters.");
    return passwordLen();

  }
  
  return passLen;

}

function includeChars(getCharMsg){
  
  var userInput = prompt(getCharMsg).toLowerCase();

  if(userInput === "y"){
    
    return true;

  } 
  else if (userInput === "n"){
  
    return false;
  
  }
  
  else{

    alert("Invalid input. Please enter 'Y' or 'N'.");
    return includeChars(getCharMsg);

  }

}

function generatePassword(){

  var passLen = passwordLen();
  var incLower = includeChars("Would you like you include lowercase characters? Enter 'Y' for yes 'N' for no");
  var incUpper = includeChars("Would you like you include uppercase characters? Enter 'Y' for yes 'N' for no");
  var incNum = includeChars("Would you like you include numeric characters? Enter 'Y' for yes 'N' for no");
  var incSpec = includeChars("Would you like you include special characters? Enter 'Y' for yes 'N' for no");

  var lower = 'abcdefghijklmnopqrstuvwxyz';
  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numbers = '0123456789';
  var symbols = '!@#$%^&*(){}[]<>=/,.';
  var allChars = '';
  var count = 4;

  if(incLower) {
    allChars += lower;
  }
  else if (!incLower){
    count--;
  }
  if(incUpper) {
    allChars += upper;
  }
  else if (!incUpper){
    count--;
  }
  if(incNum) {
    allChars += numbers;
  }
  else if (!incNum){
    count--;
  }
  if(incSpec) {
    allChars += symbols;
  }
  else if (!incSpec){
    count--;
  }
  
  if (count <= 0){
    alert('Please select at least one character type.');
    return generatePassword();
  }

  var generatedPw = '';
  for (var i = 0; i < passLen; i++){

    var randomIndex = Math.floor(Math.random() * allChars.length);
    generatedPw += allChars[randomIndex];
  
  }
  

  return generatedPw;

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
