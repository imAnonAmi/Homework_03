//This is the working version, including overwriting previous vars when generate button is pushed. Finally. Also saved as script_working_dirty, while I take out superfluous comments.

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

//TRYING TO DECLARE finalPW up here so it passes through to writePassword function??
var finalPW = "";

// MAKING IT WORK (probably)

// First we need to define the password parameters like length and what can be included
// Has to be at least 8, but not more than 128. Need to force it to be an integer.

function generatePassword() {

// Defining a variable, that will become the array, that the password will be generated into 
var pwHolder=[];
  function empty() {
    pwHolder.length = 0;
    eligibleChars.length = 0;
  }
  empty();

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
  // YES GODDAMMIT! ^^THIS FRICKIN' WORKS!

  // MODIFYING THE BELOW TO USE SAME LOGIC AS ABOVE, AND CONSOLE LOGGING ALONG THE WAY
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
  // HELL YEAH! SUCK IT UPPERCASE!

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

  // This should define a count based on remaining chars from lengthPW, then cycle through all eligibleChars to complete the password. Maybe.
  var count;
  for (count = 1; count<=lengthPW; count++) {
    var temp = Math.floor(Math.random()*eligibleChars.length); 
    console.log(temp);
    var giveIt=eligibleChars[temp];
    console.log(giveIt);
    pwHolder.push(giveIt);
    console.log(pwHolder);
    }
// SO FAR, SO F'IN GOOD!!!
// Take the above array, pwHolder, join it into one string variable, getting it ready to serve to page
   var finalPW = pwHolder.join("");
  console.log(finalPW);
//YES! GODDAMN COMMA SEPARATORS. SUCK IT! MY QUOTES DEFEAT YOU!
//alert(finalPW);


//Finally! Got the minimum requirement and gave alert. Can not figure out how to write to screen despite 1+ hours messing around with below.
//Maybe I use return?

return finalPW;
}

//WHOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!!!!!!!!! 



  
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
