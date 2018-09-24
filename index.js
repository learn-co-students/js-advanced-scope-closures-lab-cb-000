function produceDrivingRange(blockRange){
  return (startingBlock, endingBlock) => {

    let start = parseInt(startingBlock.slice(0, -2));
    let end = parseInt(endingBlock.slice(0, -2));
    let rideDistance = Math.abs(start - end);

    let difference = blockRange - rideDistance;
    let result = difference > 0 ? `within range by ${difference}` : `${Math.abs(difference)} blocks out of range`
    return result;
  }
}

function produceTipCalculator(percentage){
  return (total) => {
    return total * percentage;
  }
}

function createDriver(){
  let driverId = 0;
  return class Driver {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
