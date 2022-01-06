

var length;
var confirmNumber;
var confirmUpper;
var confirmLower;
var confirmSymbol;


letter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
number = ['0','1','2','3','4','5','6','7','8','9'];
symbol = ['!','@','#','$','%','^','&','*','(',')','{','}','[',']','=','/',',','.','-','+',']'];
space = [];

var choices;

var toUpper = function (x) {
  return x.toUpperCase();
};

letterUp = letter.map(toUpper);

var get = document.querySelector("#generate");

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
      confirmAlert = window.confirm("you choose a paswword with " + length + " digits...is this correct");

      if (!confirmAlert) {
        window.alert("Restarting password generator");
        return generatePassword();
      }
      confirmNumber = window.confirm("Will this contain numbers?...Confirm for Yes, Cancel for No.");
      confirmSymbol = window.confirm("Will this contain special characters?...Confirm for Yes, Cancel for No.");
      confirmUpper = window.confirm("Will this contain Uppercase letters?...Confirm for Yes, Cancel for No.");
      confirmLower = window.confirm("Will this contain Lowercase letters?...Confirm for Yes, Cancel for No.");
  };

 

  // Else if for 4 negative options
  if (!confirmSymbol && !confirmNumber && !confirmUpper && !confirmLower) {
      choices = alert("You must choose a criteria!");
      return generatePassword();

  }
  // First if statement that uses user input prompts to determine choices
  // Else if for 4 positive options
  else if (confirmSymbol && confirmNumber && confirmUpper && confirmLower) {

      choices = symbol.concat(number, letter, letterUp);
  }
  // Else if for 3 positive options
  else if (confirmSymbol && confirmNumber && confirmUpper) {
      choices = symbol.concat(number, letterUp);
  }
  else if (confirmSymbol && confirmNumber && confirmLower) {
      choices = symbol.concat(number, letter);
  }
  else if (confirmSymbol && confirmLower && confirmUpper) {
      choices = symbol.concat(letter, letterUp);
  }
  else if (confirmNumber && confirmLower && confirmUpper) {
      choices = number.concat(letter, letterUp);
  }
  // Else if for 2 positive options 
  else if (confirmSymbol && confirmNumber) {
      choices = symbol.concat(number);

  } else if (confirmSymbol && confirmLower) {
      choices = symbol.concat(letter);

  } else if (confirmSymbol && confirmUpper) {
      choices = symbol.concat(letterUp);
  }
  else if (confirmLower && confirmNumber) {
      choices = letter.concat(number);

  } else if (confirmLower && confirmUpper) {
      choices = letter.concat(letterUp);

  } else if (confirmNumber && confirmUpper) {
      choices = number.concat(letterUp);
  }
  // Else if for 1 positive option
  else if (confirmSymbol) {
      choices = symbol;
  }
  else if (confirmNumber) {
      choices = number;
  }
  else if (confirmLower) {
      choices = letter;
  }
  // Created space variable to fill uppercase conversion
  else if (confirmUpper) {
      choices = space.concat(letterUp);
  };

  // password variable is an array placeholder for user generated amount of length
  var password = [];

  // Start random selection variables:
  // Random selection for all variables: 
  for (var i = 0; i < length; i++) {
      var pickChoices = choices[Math.floor(Math.random() * choices.length)];
      password.push(pickChoices);
  }
  // This joins the password array and converts it to a string
  // Worked with a tutor to incorporate this option
  var ps = password.join("");
  UserInput(ps);
  return ps;
}
// This puts the password value into the textbox
// Changed function input to use textcontent
function UserInput(ps) {
  document.getElementById("password").textContent = ps;

}

