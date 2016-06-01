var letters = ['a','b','c','d','e','f','g','h','i','j','Z','N','L','Q','R'];

function validateString(str){
   validArray = [];
   parsedArgs = str.trim().split(/\s+/);

   if (parsedArgs.length < 1){
    return "requires at least one argument in function";
   }

   if (parsedArgs.length == 1) {
        for (var i = 0; i < letters.length ; i++) {
            if ( parsedArgs[0][i] == letters[i]) {
                validArray.push(letters[i]);
            }
        }
   }

   if (parsedArgs.length > 1){
    //HELP HERE
   }

}



validateString("Ze");

validateString("QRZZaZZaj");

//multiple arguments going in

validateString("Za Nj");

validateString("QZja Rhfa");

