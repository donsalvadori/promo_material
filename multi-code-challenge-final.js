//Prime Numbers

function getPrimes(max) {
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return console.log(primes);
}

getPrimes(100);

//DOM API

function changeToBlockquote() {
    var makeBlockquote = document.createElement("blockquote");
    var paragraph = document.getElementByTagName("div");
    //note this is a simplified version and likely the DOM would be much more complex than just jumping to all divs

    makeBlockquote.appendChild(paragraph);

    document.body.appendChild(makeBlockquote);
}

//Finding Pairs

function findSumPairs(array, sum) {
    'use strict';
    var
        i = 0,
        j = 0,
        isum,
        imatch,
        output = [],
        larray;

    larray = array.slice(0);

    for ( i = 0; i < larray.length; i++ ) {
        for ( j = 0; j < larray.length; j++ ) {

            if ( i !== j ) {
                isum = larray[i] + larray[j];
                if ( isum === sum ) {

                    imatch = [larray[i], larray[j]];
                    output.push(imatch);
                    larray.splice(i, 1);
                    larray.splice(j, 1);
                    break;
                }
            }
        }
    }
    return console.log(output);
}

findSumPairs([-1, 0, 1, 2], 3);

findSumPairs([-1, 0, 1, 2], 1);


//Car problem


// The Car class
var Car = function(type, capacity) {
  this.type = type;
  this.capacity = capacity;
}

// Make new instances of Car, each representing a car *type* and the type's specifics
var cars = {
  MiniVan: new Car('MiniVan', 200),
  CargoVan: new Car('CargoVan', 800),
  Truck: new Car('Truck', 1500),
  FamilyCar: new Car('FamilyCar', 300),
  SportsCar: new Car('SportsCar', 100),
};

// Returns the total capacity for the given list of Car instances
var capacity = function(carCounts) {
    var cap = 0;
  for (var i in carCounts)
    cap += cars[i].capacity * carCounts[i]; // ex: cars.CargoVan.capacity * carCounts.CargoVan = 800 * 3 = 2400
  return cap;
}

//main fx
var tally = function(carCounts, cargo) {
    console.log('Starting the tally with cargo:', cargo, ' and carCounts:', carCounts);
    var cap = capacity(carCounts);

  // Check if we can support the requested cargo amount
  // NOTE: No longer necessary for your desired output, but I'm including it for reference
  // You can also decide to only output the cars list below in the else block here
  if (cap < cargo)
    console.log('Uh-oh! We can\'t carry this much cargo all at once!');
  else
    console.log('Wooh! Such amount of cargo is easily transportable all at once!');

  // Start logging the desired output
  console.log('allocating ' + cargo + ' lbs of cargo');

  // Create a loopable list of all the car *types* we have
  var availableCarTypes = [];
  for (var type in carCounts)
    for (var i = 0; i < carCounts[type]; i++)
      availableCarTypes.push(cars[type]);

  // Loop over the available car types, and 'fill' them with cargo until we're out of either cars or cargo
  var cargoLeft = cargo;
  for (var i = 0; i < availableCarTypes.length; i++) {
    var carType = availableCarTypes[i];

    // Use the most cargo possible for this car, but don't let cargoLeft fall below 0 either
    var usedCargo = Math.min(carType.capacity, cargoLeft);
    console.log('a ' + carType.type + ' with ' + usedCargo + ' lbs');

    // We can stop when all cargo is allocated
    cargoLeft -= usedCargo;
    if (cargoLeft == 0)
      break;
  }

  // Report the leftovers
  console.log('we have ' + cargoLeft + ' lbs of cargo left over');
}

// test examples
tally({ SportsCar: 1, FamilyCar: 3, Truck: 4, MiniVan: 2, CargoVan: 1 }, 7356);

tally({ SportsCar: 1, FamilyCar: 6, Truck: 1, MiniVan: 2, CargoVan: 3 }, 7356);

