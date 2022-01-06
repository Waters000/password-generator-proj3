function getLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26)+ 97);
   
}

function getUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
 
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=/,.-+|';
  return symbols[Math.floor(Math.random() * symbols.length)];
  
}


// functions for getting prompt start here


var length = function (){
  var characterAmount = window.prompt("How many numbers from 8 -128 for your password");
  passLength = parseInt(characterAmount, 10);

 if (passLength < 8 || passLength > 128 || passLength === 0 || passLength === "") {
   window.alert("Please enter length between 8 and 128 digits.");
  return length();
  }
if (passLength > 8 && passLength < 128 ) {
  window.alert("You entered a " + passLength + " digit password.");
  console.log(passLength);
}

}

var includeUpperCase = function () {
  var includeUpperCasePrompt = window.prompt("Do you want Capital Letters? Press 1 for Yes or 2 for No");
  includeUpperCasePrompt = parseInt(includeUpperCasePrompt)
  if (includeUpperCasePrompt === 1) {
    console.log(getUpper());
    includeUpperCasePrompt = true;
  } else {
    includeUpperCasePrompt = false;
    console.log('false');

}
}

var includeLowerCase = function () {
  var includeLowercasePrompt = window.prompt("Do you lower case Letters? 1 for Yes or 2 for No");
  includeLowercasePrompt = parseInt(includeLowercasePrompt)
  if (includeLowercasePrompt === 1) {
    console.log(getLower());
  } else {
    includeLowercasePrompt = false;
    console.log('false');

}
}

var includeSymbols = function () {
  var includeSymbolsPrompt = window.confirm("Do you want to include symbols?  1 for Yes or 2 No");
  includeSymbolsPrompt = parseInt(includeSymbolsPrompt);
  if (includeSymbolsPrompt === 1) {
    console.log(getRandomSymbol()); 
    includeSymbolsPrompt = true;
  } else {
    includeSymbolsPrompt = false;
    console.log('false');
  }
  }
  
  var symbols = function () {
    var symbolsPrompt = window.prompt("Do you want numbers? Press 1 for Yes or 2 for No");
    symbolsPrompt = parseInt(symbolsPrompt);
    if (symbolsPrompt === 1) {
      console.log(getRandomSymbol());
    } else {
      symbolsPrompt = false;
      console.log('false');
    }
    }



var includeRandomNumber = function () {
  var includeRandomNumberPrompt = window.prompt("Do you want numbers? Press 1 for Yes or 2 for No");
  includeRandomNumberPrompt = parseInt(includeRandomNumberPrompt);
  if (includeRandomNumberPrompt === 1) {
    console.log(getRandomNumber());
  } else {
    includeRandomNumberPrompt = false;
    console.log('false');
  }
  }


// Assignment code here




document.getElementById("generate")
.addEventListener("click", function( e ){ //e => event
        if( ! confirm("Do you want set a password?") ){
            e.preventDefault(); // ! => don't want to do this
        } else if (e){
            //want to do this! => maybe do something about it?
            alert('Ok, lets select criteria for you password!');
        } 
     
        length();
        
        includeUpperCase();

        includeLowerCase();

        symbols();
  
        includeRandomNumber();
    
});

var getFunctions = {
  lower: getLower,
  upper: getUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}

// var lower = getLower;
// var upper = includeUpperCasePrompt;
// var number = getRandomNumber;
// var symbol = includeSymbolsPrompt;
console.log()


console.log(getLower());
console.log(getUpper());
console.log(getRandomNumber());
console.log(getRandomSymbol());


//  passLength = parseInt(lengthPrompt, 10);
 



function generatePassword (lower, upper, number, symbol){
 
  var generatedPassword = '';
  
  const typesCount = lower + upper + number + symbol;

  console.log('typesCount: ', typesCount);

  const typesArr = [getLower, getUpper, number, symbol];
  console.log('typesArr:' , typesArr)
  
};

// var length = function () {
//  var lengthPrompt = window.prompt("How many numbers from 8 -128 for your password");
//  passLength = parseInt(lengthPrompt, 10);
 
//  if (passLength < 8 || passLength > 128 || passLength === 0 || passLength === "") {
//    window.alert("Please enter length between 8 and 128 digits.");
//   return length();
//   }
// if (passLength > 8 && passLength < 128 ) {
//   window.alert("You entered a " + passLength + " digit password.");
//   console.log(passLength);
//   }
//   var text = "";
//   var shuffle = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// for (var i=0; i < passLength; i++){
//  console.log( text += shuffle.charAt(Math.floor(Math.random() * shuffle.length)));
//   }
// }







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
