// //Prime Numbers

// function getPrimes(max) {
//     var sieve = [], i, j, primes = [];
//     for (i = 2; i <= max; ++i) {
//         if (!sieve[i]) {
//             primes.push(i);
//             for (j = i << 1; j <= max; j += i) {
//                 sieve[j] = true;
//             }
//         }
//     }
//     return console.log(primes);
// }

// getPrimes(100);

// //DOM API

// function changeToBlockquote() {
//     var makeBlockquote = document.createElement("blockquote");
//     var paragraph = document.getElementByTagName("div");
//     //note this is a simplified version and likely the DOM would be much more complex than just jumping to all divs

//     makeBlockquote.appendChild(paragraph);

//     document.body.appendChild(makeBlockquote);
// }

// //Finding Pairs

// function findSumPairs(array, sum) {
//     'use strict';
//     var
//         i = 0,
//         j = 0,
//         isum,
//         imatch,
//         output = [],
//         larray;

//     larray = array.slice(0);

//     for ( i = 0; i < larray.length; i++ ) {
//         for ( j = 0; j < larray.length; j++ ) {

//             if ( i !== j ) {
//                 isum = larray[i] + larray[j];
//                 if ( isum === sum ) {

//                     imatch = [larray[i], larray[j]];
//                     output.push(imatch);
//                     larray.splice(i, 1);
//                     larray.splice(j, 1);
//                     break;
//                 }
//             }
//         }
//     }
//     return console.log(output);
// }

// findSumPairs([-1, 0, 1, 2], 3);

// findSumPairs([-1, 0, 1, 2], 1);


//Object Oriented Programming: Cargo Problem


//super class
function Car(doors, capacity, storage, type) {
    this.doors = doors;
    this.type = type;
    this.capacity = capacity;
    this.storage = storage;
    this.load = 0;
};



//Van subclass

function Van(){
    Car.call(this);
    this.doors = 4;
    this.storage = "rear storage";
}

Van.prototype = Object.create(Car.prototype);
Van.prototype.constructor = Van;

//subclass of Van

function MiniVan(){
    Van.call(this);
    this.type = "MiniVan";
    this.capacity = 200;
}

MiniVan.prototype = Object.create(Van.prototype);
MiniVan.prototype.constructor = MiniVan;

var myminivan = new MiniVan();

//subclass of Van

function CargoVan () {
    Van.call(this);
    this.type = "CargoVan";
    this.capacity = 800;
}

CargoVan.prototype = Object.create(Van.prototype);
CargoVan.prototype.constructor = CargoVan;

//subclass of car

function Truck () {
    Car.call(this);
    this.doors = 2;
    this.type = "Truck";
    this.storage = 'bed';
    this.capacity = 1500;
}

Truck.prototype = Object.create(Car.prototype);
Truck.prototype.constructor = Truck;

//subclass of car

function FamilyCar (){
    Car.call(this);
    this.doors = 4;
    this.type = "FamilyCar";
    this.storage = "large truck";
    this.capacity = 300;
}

FamilyCar.prototype = Object.create(Car.prototype);
FamilyCar.prototype.constructor = FamilyCar;

//subclass of car

function SportsCar (){
    Car.call(this);
    this.doors = 2;
    this.type = "SportsCar";
    this.storage = "small trunk";
    this.capacity = 100;
}

SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;


//end of chain


//helper functions
function handleArray(array, target, n) {
  for (var i = 0; i < n; i++) {
    array.push(new target());
  }
}


//passing in carsArray (capacity) and original cargo

function full (carArray){
    var cap = 0;
    for (var i in carArray) {
        cap += carArray[i].capacity * carArray[i].length;
    }
    return console.log(cap);
}


//parent function, data is a hash of values for # of cars

function tally(data, cargo) {
    var sportArray = [];
    var familyArray = [];
    var truckArray = [];
    var miniArray = [];
    var cargoArray = [];

    var output =[];
    var parsed = [];
    var names = [];

    // var normalizedCargo = (cargo / 100);

    //buids out my objects based on helper function above
    handleArray(sportArray,SportsCar, data.n1);
    handleArray(familyArray,FamilyCar, data.n2);
    handleArray(truckArray,Truck, data.n3);
    handleArray(miniArray,MiniVan, data.n4);
    handleArray(cargoArray,CargoVan, data.n5);


    //storing all the cars together in mega array
    var carArray = sportArray.concat(familyArray, truckArray, miniArray, cargoArray);

    //gives us a mapped array of just the capacity values stored in one neat array
    var carsMapped = carArray.map( function(o) { return o.capacity; });

    var startCargo = cargo; //maintain original in memory

    var sumTotal = carsMapped.reduce(function(prev,curr){
        return prev + curr;
    });


    // strggling hard core here maybe revise OO properties to make easier?

    full(carArray);


    //now for the printing finale!!!!
    console.log("Allocating " + startCargo + " LB of cargo in total");
    //refactor into print fx
    for(var i = 0; i < carArray.length; i++) {
       names.push(carArray[i].type);
       parsed.push(carArray[i].capacity);
       console.log( "A " + names[i] + " with " + parsed[i] + " LBs");
    }
    console.log("We have " + cargo + " LBs of cargo left over.")
}


// //test output

tally({n1: 1, n2: 3, n3: 4, n4: 2, n5: 1}, 7356);
// tally({n1: 1, n2: 6, n3: 1, n4: 2, n5: 3}, 7356);
// tally({n1: 1, n2: 1, n3: 1, n4: 1, n5: 1}, 1);
// tally({n1: 0, n2: 0, n3: 1, n4: 0, n5: 0}, 0);




