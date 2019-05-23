function produceDrivingRange(range) {
  return function (start, end) {
    let diff = range - Math.abs(parseInt(start, 10) - parseInt(end, 10));
    if (diff < 0) {
      return `${Math.abs(diff)} blocks out of range`;
    } else {
      return `within range by ${diff}`;
    }
  };
}
function produceTipCalculator(percentage) {
  return function (fare) {
    return fare * percentage;
  };
}
function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  };
}
