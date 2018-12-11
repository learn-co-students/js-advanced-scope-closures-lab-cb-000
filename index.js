function produceDrivingRange(range) {
  return function(startBlock, endBlock) {
    let distance = Math.abs(parseInt(startBlock) - parseInt(endBlock))
    let difference = range - distance
    if(difference >= 0) {
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(tip) {
  return function(cost) {
    return cost * tip
  }
}
