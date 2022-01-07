/*What's the Plan?  - Try for the most simple method for now.
User clicks button - Start the generage button function 
 window prompt for the set length with integer - set variable to length
 confirm prompt for remainder of questions...confirmNumber, confirmUpper, confirmLower, confirmSymbol.
 window confirmation is set to empty variable and placed as ture when confirmed.
 
 User's options 1) - length, yes, yes, yes, yes.
                2) - length, yes, yes, yes, no
                3) - length, yes, yes, no, no
                4) - length, yes, no, no, no
                5) - length, no, no, no, no. (this will be excluded.)

4 arrays with upper, lower, symbols and numbers
IF confirmNumber is confirmed, make equal to number array. do same for all confirmed prompts.
Concat each array to a confirm variable with all options for each confirmed array.

Loop through the confirm variable to get random password.
Put random password into it's own array.
pull array out as a string with join method call ps.
Put ps back into dom and show in html.

*/

var length;
var confirmNumber; // Number value is now blank will equal the confirm or cancel value in confirm window prompt.
var confirmUpper;  // Upper character blank will equal the confirm or cancel value in confirm window prompt.
var confirmLower;  // Lower character blank will equal the confirm or cancel value in confirm window prompt.
var confirmSymbol;  // Symbols blank will equal the confirm or cancel value in confirm window prompt.

var confirm; // empty but will concat the values from all confirmed values from IF Else statements.

letter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
number = ['0','1','2','3','4','5','6','7','8','9'];
symbol = ['!','@','#','$','%','^','&','*','(',')','{','}','[',']','=','/',',','.','-','+',']'];
letterUp = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];


var get = document.querySelector("#generate");

/// click button function to get started
get.addEventListener("click", function(  ){ 
 ps = generatePassword();
 document.getElementById("password").placeholder = ps;
});

// Start function to generate password
function generatePassword() {
 window.confirm("Welcome to password generator");

  // Asks for user input
  length = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  // First if statement for user validation 
  if (!length) {
      alert("This needs a value");
  } else if (length < 8 || length > 128) {
      // Validates user input
      // Start user input prompts
      length = parseInt(prompt("You must choose between 8 and 128"));
      return generatePassword();
  } else {
      // Continues once user input is validated
      confirmAlert = window.confirm("you choose a paswword with " + length + " digits...is this correct?");

      if (!confirmAlert) {
        window.alert("Restarting password generator");
        return generatePassword();
      }
      confirmNumber = window.confirm("Would you like your password to contain numbers?...Confirm for Yes, Cancel for No.");
      confirmSymbol = window.confirm("Would you like your password to contain special characters?...Confirm for Yes, Cancel for No.");
      confirmUpper = window.confirm("Would you like your password to contain Uppercase letters?...Confirm for Yes, Cancel for No.");
      confirmLower = window.confirm("Would you like your password to contain Lowercase letters?...Confirm for Yes, Cancel for No.");
  };

  // Option 5, all no options
  if (!confirmSymbol && !confirmNumber && !confirmUpper && !confirmLower) {
    confirm = alert("You must choose a criteria!");
      return generatePassword();

  }
  // User input prompts to determine user's confirm or no.
  // Option 1, all confirmed options
  else if (confirmSymbol && confirmNumber && confirmUpper && confirmLower) {
    confirm = symbol.concat(number, letter, letterUp);
    console.log(confirm)
  }
  // Option 2, 3 confirmed options. All options for 3 confirmed options.
  else if (confirmSymbol && confirmNumber && confirmUpper) {
    confirm = symbol.concat(number, letterUp);
    console.log(confirm)
  }
  else if (confirmSymbol && confirmNumber && confirmLower) {
    confirm = symbol.concat(number, letter);
    console.log(confirm)
  }
  else if (confirmSymbol && confirmLower && confirmUpper) {
    confirm = symbol.concat(letter, letterUp);
    console.log(confirm)
  }
  else if (confirmNumber && confirmLower && confirmUpper) {
    confirm = number.concat(letter, letterUp);
    console.log(confirm)
  } 
  // Option 3 - 2 confirmed options with all options.
  else if (confirmSymbol && confirmNumber) {
    confirm = symbol.concat(number);
    console.log(confirm)

  } else if (confirmSymbol && confirmLower) {
    confirm = symbol.concat(letter);
    console.log(confirm)

  } else if (confirmSymbol && confirmUpper) {
    confirm = symbol.concat(letterUp);
    console.log(confirm)
  }
  else if (confirmLower && confirmNumber) {
    confirm = letter.concat(number);
    console.log(confirm)

  } else if (confirmLower && confirmUpper) {
    confirm = letter.concat(letterUp);
    console.log(confirm)

  } else if (confirmNumber && confirmUpper) {
    confirm = number.concat(letterUp);
    console.log(confirm)
  }
  // Option 4 - 1 confirmed option for each prompt.
  else if (confirmSymbol) {
    confirm = symbol;
    console.log(confirm)
  }
  else if (confirmNumber) {
    confirm = number;
    console.log(confirm)
  }
  else if (confirmLower) {
    confirm = letter;
    console.log(confirm)
  }
  // Created space variable to fill uppercase conversion
  else if (confirmUpper) {
    confirm = letterUp;
  };

  // password variable is an empty array placeholder to hold loop output for user generated amount of length
  var password = [];

  // For loop to get a random password from confirmed set of characters.
  // Random selection for all variables: 
  for (var i = 0; i < length; i++) {
      var pickconfirm = confirm[Math.floor(Math.random() * confirm.length)];
      console.log(pickconfirm);
      //push random confirmed letters into if/else with a loop and into the password array
      password.push(pickconfirm);
      console.log(password);
  }
  // This joins the password array and converts it to a string
  var ps = password.join("");
  UserInput(ps);
  console.log(ps);
  return ps;
}


// This puts the password value into the textbox
// Changed function input to use textcontent
function UserInput(ps) {
  document.getElementById("password").textContent = ps;

}

