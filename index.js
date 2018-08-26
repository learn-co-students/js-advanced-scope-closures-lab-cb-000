function produceDrivingRange(blockRange){
  return function(blockOne, blockTwo) {
    let distance = Math.abs(parseInt(blockOne) - parseInt(blockTwo));
    let diff = Math.abs(blockRange - distance);

    if (distance > blockRange) {
      return `${diff} blocks out of range`;}
    else {
      return `within range by ${diff}`;}
    }
  }

function produceTipCalculator(percentage){
  return function(bill){
    return bill * percentage;
  }
}

function createDriver(){
  let driverId = 0
  return class {
    constructor(name){
      this.name = name
      this.id = ++driverId;
    }
  }
}
