function produceDrivingRange(blockRange) {
  return function(start, end) {
    let trip = Math.abs(parseInt(start) - parseInt(end));
    if (trip <= blockRange) {
      return `within range by ${blockRange - trip}`;
    }
    else {
      return `${trip - blockRange} blocks out of range`;
    }
  };
}

function produceTipCalculator(percentage) {
  return function(amount) {
    return amount * percentage;
  };
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.id = ++driverId;
      this.name = name;
    }
  };
}