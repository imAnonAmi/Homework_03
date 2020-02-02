// VARIABLE DECLARATIONS

// Possible lower case characters
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Possible upper case characters
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// Possible numbers
var num = [0,1,2,3,4,5,6,7,8,9];

// Possible special characters
var special = ["!","@","#","$","%","^","&","*","(",")","_","-",":",";","<",">"];

// MAKING IT WORK (probably)

// First we need to define the password parameters like length and what can be included
// Has to be at least 8, but not more than 128. Need to force it to be an integer.

function definePassword() {
  var length = parseInt(prompt("How many characters do you want your password to be? Minimum 8, maximum 128")); // <<Double parentheses dammit! Use the VS tools. Don't waste time hunting.

if (length < 8) {
  alert("Your password must be at least 8 characters long. Please try again.");
} 
if (length > 128) {
  alert("Your password can not be over 128 characters long. Please try again.");
}

// Ask user questions to determine what can go into the PW or not. Need to make new vars for this, not overwrite your first ones!!! Remember that.

var lowerInclude = confirm("Would you like your password to include lower case letters?");

var upperInclude = confirm("Would you like your password to include upper case letters?");

var numInclude = confirm("Would you like your password to include numbers?");

var specialInclude = confirm("Would you like your password to include special characters?");

// I think I need to make an object that holds all of these?

var passwordChoices = {
  length: length, // <<properties have commas, not semi-colons. Save yourself 15 minutes of frustration and remember that next time
  lowerInclude: lowerInclude,
  upperInclude: upperInclude,
  numInclude: numInclude,
  specialInclude: specialInclude
}
  return passwordChoices;
}


// It is alarming that we have not discussed or reviewed the below concepts prior to this assignment
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
