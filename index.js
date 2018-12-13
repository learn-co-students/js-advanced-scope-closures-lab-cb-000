


function produceDrivingRange(blockRange) {
  return function drivingRange(start, stop) {
    const startNum = parseInt(start, 10);
    const stopNum = parseInt(stop, 10);
    const distance = stopNum - startNum;
    if (blockRange >= distance) {
      return `within range by ${blockRange - distance}`;
    } else if (blockRange < distance) {
      return `${distance - blockRange} blocks out of range`
    }
  };
}


function produceTipCalculator(percentage) {
  return function tipCalculator(bill) {
    return bill * percentage;
  };
}


function createDriver() {
  let DriverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++DriverId;
    }
  };
}
