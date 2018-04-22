// Returns a function that calculates whether a given trip is within range. For example, produceDrivingRange(10) returns a function that will return false if the trip is over 10 blocks distance and true if the distance is within range. So produceDrivingRange returns a function that we can then use to calculate if a trip is too large for a driver.
// returns a function
// takes an argument of blockRange which is then used to calculate if something is within range
// returns when something is out of range
function produceDrivingRange(blockRange){
  return function(startingBlock, endingBlock){

    let start = parseInt(startingBlock);
    let end = parseInt(endingBlock);
    let distanceToTravel = Math.abs(end - start);
    let difference = blockRange - distanceToTravel;

    if (difference > 0) {
      return `within range by ${difference}`;
    } else {
      return `${Math.abs(difference)} blocks out of range`;
    }
  };
}

// Returns a function that then calculates a tip. For example, produceTipCalculator(.10) returns a function that calculates ten percent tip on a fare. produceTipCalculator(.20) returns a function that calculates twenty percent tip on a fare.
// returns a function
// configures the percentage tip returned
function produceTipCalculator(percentage){
  return function(rideFare){
    return rideFare * percentage;
  };
}

// Returns a function that returns a class that produces a Driver class. The class has reference to a driverId that is incremented each time a new driver is created. The rest of the code base does not have access to driverId.
// returns a class that allows us to create a driver with a name attribute
// increments the driverId each time a driver is created
function createDriver(){
  let driverId = 0;
  return class {
    constructor(name){
      this.id = driverId++;
      this.name = name;
    }
  };
}
