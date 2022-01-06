

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
  // Asks for user input
  length = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  // First if statement for user validation 
  if (!length) {
      alert("This needs a value");
  } else if (length < 8 || length > 128) {
      // Validates user input
      // Start user input prompts
      length = parseInt(prompt("You must choose between 8 and 128"));

  } else {
      // Continues once user input is validated
      confirmNumber = confirm("Will this contain numbers?");
      confirmSymbol = confirm("Will this contain special characters?");
      confirmUpper = confirm("Will this contain Uppercase letters?");
      confirmLower = confirm("Will this contain Lowercase letters?");
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
      choices = space.concat(alpha2);
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

var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
  copyPassword();
});

function copyPassword() {
  document.getElementById("password").select();
  document.execCommand("Copy");
  alert("Password copied to clipboard!");
}

// This copies the password value - works
// Code example demonstrated in a youtube video: 
// Source: https://youtu.be/9sT03jEwcaw


///my section

// function questions() {
// var confirmCap = confirm.prompt("Would you like Capital Letters?..Confirm for yes and Cancel for no.");
// var confrimNum = confirm.prompt("Would you like Numbers in your Password?...Confirm for Yes and Cancel for No");
// var confrimLower = confirm.prompt("Would you like lower case letters in your Password?...Confirm for Yes and Cancel for No");
// var confrimSymbol = confirm.prompt("Would you like Symbols in your Password?...Confirm for Yes and Cancel for No");
// }



// function getLower(){
//    passLength = "";
//    var text = "";
//    var shuffle = "abcdefghijklmnopqrstuvwxyz";
//  for (var i=0; i < passLength; i++){
//   console.log( text += String.fromCharCode(Math.floor(Math.random() * 26)+ 97));
//    }
   
// }


// // Assignment code here




// document.getElementById("generate")
// .addEventListener("click", function( e ){ //e => event
  

//         if( ! confirm("Do you want set a password?") ){
//             e.preventDefault(); // ! => don't want to do this
//         } else if (e){
//             //want to do this! => maybe do something about it?
//             alert('Ok, lets select criteria for you password!');
//         } 
        
//         questions();

//         generatePassword();

       

// });




// function generatePassword (){
//   var charBank = "";
  
//   var lengthPrompt = window.prompt("How many numbers from 8 -128 for your password");
//   passLength = parseInt(lengthPrompt, 10);
  
//   if (passLength < 8 || passLength > 128 || passLength === 0 || passLength === "") {
//     window.alert("Please enter length between 8 and 128 digits.");
//    return length();
//    }
//  if (passLength > 8 && passLength < 128 ) {
//    window.alert("You entered a " + passLength + " digit password.");
//    console.log(passLength);
//    }
//    var text = "";
//    var shuffle = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//  for (var i=0; i < passLength; i++){
//   console.log( text += shuffle.charAt(Math.floor(Math.random() * shuffle.length)));
//    }


//   };









// // console.log(getLower());
// // console.log(getUpper());
// // console.log(getRandomNumber());
// // console.log(getRandomSymbol());


// //  passLength = parseInt(lengthPrompt, 10);
 




// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");



// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);




// function getUpper(){
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
//   return true;
// }

// function getRandomNumber() {
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
//   return true;
// }

// function getRandomSymbol() {
//   const symbols = '!@#$%^&*(){}[]=/,.-+|';
//   return  symbols[Math.floor(Math.random() * symbols.length)];
//    return true;
// }


// functions for getting prompt start here


// var length = function () {
//   var lengthPrompt = window.prompt("How many numbers from 8 -128 for your password");
//   passLength = parseInt(lengthPrompt, 10);
  
//   if (passLength < 8 || passLength > 128 || passLength === 0 || passLength === "") {
//     window.alert("Please enter length between 8 and 128 digits.");
//    return length();
//    }
//  if (passLength > 8 && passLength < 128 ) {
//    window.alert("You entered a " + passLength + " digit password.");
//    console.log(passLength);
//    }
//    var text = "";
//    var shuffle = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//  for (var i=0; i < passLength; i++){
//   console.log( text += shuffle.charAt(Math.floor(Math.random() * shuffle.length)));
//    }
//  }
 

// var includeUpperCase = function () {
//   var includeUpperCasePrompt = window.prompt("Do you want Capital Letters? Press 1 for Yes or 2 for No");
//   includeUpperCasePrompt = parseInt(includeUpperCasePrompt)
//   if (includeUpperCasePrompt === 1) {
//     console.log(String.fromCharCode(Math.floor(Math.random() * 26) + 65));
//     upper = true;
//   } else {
//     includeUpperCasePrompt = false;
//     console.log('false');

// }
// }

// var includeLowerCase = function () {
//   var includeLowercasePrompt = window.prompt("Do you lower case Letters? 1 for Yes or 2 for No");
//   includeLowercasePrompt = parseInt(includeLowercasePrompt)
//   if (includeLowercasePrompt === 1) {
//     console.log(getLower());
//     lower = true;
//   } else {
//     includeLowercasePrompt = false;
//     console.log('false');

// }
// }

// var includeSymbols = function () {
//   var includeSymbolsPrompt = window.confirm("Do you want to include symbols?  1 for Yes or 2 No");
//   includeSymbolsPrompt = parseInt(includeSymbolsPrompt);
//   if (includeSymbolsPrompt === 1) {
//     console.log(getRandomSymbol()); 
//     symbol = true;
//   } else {
//     includeSymbolsPrompt = false;
//     console.log('false');
//   }
//   }
  
//   var symbols = function () {
//     var symbolsPrompt = window.prompt("Do you want numbers? Press 1 for Yes or 2 for No");
//     symbolsPrompt = parseInt(symbolsPrompt);
//     if (symbolsPrompt === 1) {
//       console.log(getRandomSymbol());
//       number = true;
//     } else {
//       symbolsPrompt = false;
//       console.log('false');
//     }
//     }



// var includeRandomNumber = function () {
//   var includeRandomNumberPrompt = window.prompt("Do you want numbers? Press 1 for Yes or 2 for No");
//   includeRandomNumberPrompt = parseInt(includeRandomNumberPrompt);
//   if (includeRandomNumberPrompt === 1) {
//     console.log(getRandomNumber());
//   } else {
//     includeRandomNumberPrompt = false;
//     console.log('false');
//   }
//   }
