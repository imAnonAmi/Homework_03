// VARIABLE DECLARATIONS

// Possible lower case characters
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Possible upper case characters
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// Possible numbers
var num = [0,1,2,3,4,5,6,7,8,9];

// Possible special characters
var special = ["!","@","#","$","%","^","&","*","(",")","_","-",":",";","<",">"];

// Defining a variable, that will become the array, that the password will be generated into 
var pwHolder

// Defining a variable, that will become the array that holds all eligible characters to randomly select from
var eligibleChars

// MAKING IT WORK (probably)

// First we need to define the password parameters like length and what can be included
// Has to be at least 8, but not more than 128. Need to force it to be an integer.

function generatePassword() {
  var lengthPW = parseInt(prompt("How many characters do you want your password to be? Minimum 8, maximum 128")); // <<Double parentheses dammit! Use the VS tools. Don't waste time hunting.

if (lengthPW < 8) {
  alert("Your password must be at least 8 characters long. Please try again.");
} 
if (lengthPW > 128) {
  alert("Your password can not be over 128 characters long. Please try again.");
}

// Ask user questions to determine what can go into the PW or not. Need to make new vars for this, not overwrite your first ones!!! Remember that.

var lowerInclude = confirm("Would you like your password to include lower case letters?");

var upperInclude = confirm("Would you like your password to include upper case letters?");

var numInclude = confirm("Would you like your password to include numbers?");

var specialInclude = confirm("Would you like your password to include special characters?");

// I think I need to make an object that holds all of these?

//Killed object here

// Need some if statements here to determine what can go into eligibleChars and to assign one of each to pwHolder AND decrement length by 1 for each time this happens

// This should see if lower case is included, add one such character to password if so, add all lower case characters to eligible characters if so, and decrease the overall length of the password by 1 for future calculations and for statements.

if (lowerInclude===true) { pwHolder.push(lower[Math.floor(math.random())*lower.length]);
  eligibleChars=eligibleChars.concat(lower);
  lengthPW===lengthPW - 1;
  }

  // This should see if upper case is included, add one such character to password if so, add all upper case characters to eligible characters if so, and decrease the overall length of the password by 1 for future calculations and for statements.
  if (upperInclude===true) { pwHolder.push(upper[Math.floor(math.random())*upper.length]);
    eligibleChars=eligibleChars.concat(upper);
    lengthPW===lengthPW - 1;
    }

  // This should see if numbers are included, add one number to password if so, add all numbers to eligible characters if so, and decrease the overall length of the password by 1 for future calculations and for statements.
  if (numInclude===true) { pwHolder.push(num[Math.floor(math.random())*num.length]);
    eligibleChars=eligibleChars.concat(num);
    lengthPW===lengthPW - 1;
    }
  
  // This should see if special chars are included, add one such character to password if so, add all special characters to eligible characters if so, and decrease the overall length of the password by 1 for future calculations and for statements.
  if (specialInclude===true) { pwHolder.push(special[Math.floor(math.random())*special.length]);
    eligibleChars=eligibleChars.concat(special);
    lengthPW===lengthPW - 1;
    }

  // This should define a count based on remaining chars from lengthPW, then cycle through all eligibleChars to complete the password. Maybe.
  var count;
  for (count = 1; count <= lengthPW; count--) {
    pwHolder.concat(eligibleChars);
  }
}


// ASK ABOUT THE BELOW IN CLASS. NO IDEA.

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
