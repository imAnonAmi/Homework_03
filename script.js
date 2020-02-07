//This is the working version, including overwriting previous vars when generate button is pushed. Finally. Vars declared globally, apart pwHolder (inside function generatePassword). 

// Possible lower case characters
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Possible upper case characters
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// Possible numbers
var num = [0,1,2,3,4,5,6,7,8,9];

// Possible special characters
var special = ["!","@","#","$","%","^","&","*","(",")","_","-",":",";","<",">"];

// Defining a variable, that will become the array that holds all eligible characters to randomly select from
var eligibleChars=[];

// Defining final PW string, in which the pwHolder array is joined together before being returned out of function generatePassword to document
var finalPW = "";

// Most of the work done in this function
function generatePassword() {

// Defining the array that the password will be generated into. Then setting it and eligibleChars array lengths to 0 so that repeat usage will generate consistent results. 
var pwHolder=[];
  function empty() {
    pwHolder.length = 0;
    eligibleChars.length = 0;
  }
  empty();

// Determining password length. Forcing conformity to parameters.
  var lengthPW = parseInt(prompt("How many characters do you want your password to be? Minimum 8, maximum 128")); // 

if (lengthPW < 8) {
  alert("Your password must be at least 8 characters long. Please try again.");
  return;
} 
if (lengthPW > 128) {
  alert("Your password can not be over 128 characters long. Please try again.");
  return;
}

// Ask user questions to determine what can go into the PW or not.

var lowerInclude = confirm("Would you like your password to include lower case letters?");

var upperInclude = confirm("Would you like your password to include upper case letters?");

var numInclude = confirm("Would you like your password to include numbers?");

var specialInclude = confirm("Would you like your password to include special characters?");

// Adding some logic to force people to confirm at least one of the above character types for their password

if (lowerInclude == false && upperInclude == false && numInclude == false && specialInclude == false) {
  alert("Your password must contain at least one of the defined types of characters. Please try again.");
  return;
}
// These if statements are contingent on answers above and determine what can go into eligibleChars AND ALSO assign one of each to pwHolder AND decrement length by 1 for each time this happens (length is called in for statement at end of function to fill in remaining characters).

// Leaving all my console.logs in as a reminder when I review this code of how to work through non-functioning code line by line, but they could be deleted for cleaner code.

// This should see if lower case is included, add one such character to password if so, add all lower case characters to eligible characters if so, and decrease the overall length of the password by 1 for future calculations and for statements.

if (lowerInclude == true) { 
  var temp = Math.floor(Math.random()*lower.length); 
  console.log(temp);
  var giveIt=lower[temp];
  console.log(giveIt);
  pwHolder.push(giveIt);
  console.log(pwHolder);
  eligibleChars=eligibleChars.concat(lower);
  console.log(eligibleChars);
  lengthPW--;
  console.log(lengthPW);
  }

// This should see if upper case is included, add one such character to password if so, add all upper case characters to eligible characters if so, and decrease the overall length of the password by 1 for future calculations and for statements.

  if (upperInclude == true) { 
    var temp = Math.floor(Math.random()*upper.length); 
    console.log(temp);
    var giveIt=upper[temp];
    console.log(giveIt);
    pwHolder.push(giveIt);
    console.log(pwHolder);
    eligibleChars=eligibleChars.concat(upper);
    console.log(eligibleChars);
    lengthPW--;
    console.log(lengthPW);
    }
// This should see if numbers are included, add one number to password if so, add all numbers to eligible characters if so, and decrease the overall length of the password by 1 for future calculations and for statements.

  if (numInclude == true) { 
    var temp = Math.floor(Math.random()*num.length); 
    console.log(temp);
    var giveIt=num[temp];
    console.log(giveIt);
    pwHolder.push(giveIt);
    console.log(pwHolder);
    eligibleChars=eligibleChars.concat(num);
    console.log(eligibleChars);
    lengthPW--;
    console.log(lengthPW);
    }
  
// This should see if special chars are included, add one such character to password if so, add all special characters to eligible characters if so, and decrease the overall length of the password by 1 for future calculations and for statements.

  if (specialInclude == true) { 
    var temp = Math.floor(Math.random()*special.length); 
    console.log(temp);
    var giveIt=special[temp];
    console.log(giveIt);
    pwHolder.push(giveIt);
    console.log(pwHolder);
    eligibleChars=eligibleChars.concat(special);
    console.log(eligibleChars);
    lengthPW--;
    console.log(lengthPW);
    }

// Define count based on remaining chars from lengthPW, then cycle through all eligibleChars to complete the password.

  var count;
  for (count = 1; count<=lengthPW; count++) {
    var temp = Math.floor(Math.random()*eligibleChars.length); 
    console.log(temp);
    var giveIt=eligibleChars[temp];
    console.log(giveIt);
    pwHolder.push(giveIt);
    console.log(pwHolder);
    }

// Take the above array, pwHolder, joins it into one string variable, getting it ready to serve to page. Replaces comma separators with nothing via ("")

   var finalPW = pwHolder.join("");
  console.log(finalPW);

return finalPW;
}
 
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
