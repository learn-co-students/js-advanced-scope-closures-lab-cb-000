function produceDrivingRange(blockRange) {
  return function insideFunction(start, finish){
    let travelDistance = Math.abs(parseInt(finish) - parseInt(start));

    if(travelDistance <= blockRange) {
    	return `within range by ${blockRange - travelDistance}`
    } else {
      return `${travelDistance - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator(percent) {
  return function(bill) {
    return (bill * percent);
  }
}

function createDriver() {
  let driverId = 0;

  return class Driver {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
