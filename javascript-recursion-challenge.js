

//global constants, admittated im being a little lazy here but wouldnt submit this for production

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'Z', 'N', 'L', 'Q', 'R'];
var lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
var capitals = ['N', 'L', 'Q', 'R'];

//helper function

function isValid(str) {
  if ((new RegExp('^[\\s' + letters.join('') + ']+$')).test(str)) {
    return true;
  } else {
    return false;
  }
}

isValid("Za Zy"); // => false
isValid("Za Qf"); // => true


function validityStrSingleCase(str){
   var output = [];

    if ( isValid(str) === false) { return console.log(str + " is not a match"); }
    else if (str.length == 1) {
        for (var i = 0; i < letters.length; i++){
           if ( str.charAt(0) == letters[i] ){
             output.push(str.charAt(0));
           }
        }
        return console.log(output + " is a match");
    }
}

validityStrSingleCase('a');
validityStrSingleCase('Z');
validityStrSingleCase("z");
validityStrSingleCase("P");
validityStrSingleCase("Q");


// var character = '5';
// if (character == character.toUpperCase()) {
//  alert ('upper case true');
// }
// if (character == character.toLowerCase()){
//  alert ('lower case true');
// }




// ok so if first letter is valid string, then move onto the next letter of string and evaluate its validity
// I know the first character is validityStrSingleCase

//Think about this recursively,
// first, need an if statement to see if the charAt(0) is capital or not, this will set the precident of the recursion 'loop'
//if letter is capital (see code above for potential implementation), I would need to make sure it's a valid capital by
//plugging into validityStrSingleCase() above
//if this is the only character of the string then just return that character in some output array, if not
// find some way to do CharAt(n+1) in the recursion element (this is where Im stuck due to time constraints)


//the parent fx aka the one that will handle all the I/O described in case  (commented out because not fully implemented) also requires helper fx above


// function ValidityOfStr(str){
//     var output = [];
//     var parsedArgs = str.split(' ');

//     if ( isValid(str) === false) { return console.log("Invalid"); }

//     validityStrSingleCase(str);


//     // for (var i = 0; i < letters; i++){
//     //     if(str.charAt(i) == 'Z') {
//     //         output.push('Z');
//     //         ValidityOfStr( str.charAt(i+1) );
//     //     }
//     // }


//     // for(var i = 0; i < letters.length; i++) {
//     //    if(str.charAt(0) == capitals[i]){

//     //     }
//     // }
// }


//Test cases


// ValidityOfStr("Ze");

// ValidityOfStr("QRZZaZZaj");

// ValidityOfStr("Za Nj");

// ValidityOfStr("QZja Rhfa");

