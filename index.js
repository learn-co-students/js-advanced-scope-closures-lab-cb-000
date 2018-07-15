function produceDrivingRange(number) {
  function toInt (string) {
    return parseInt(string.slice(0,-2) )
  };

  return function (firstAve, secondAve) {
    firstAve = toInt(firstAve);
    secondAve = toInt(secondAve);
    let distance = Math.abs(secondAve - firstAve);

    const outOfRange = (distance > number) ? true : false
    if (outOfRange) {
      return `${distance - number} blocks out of range`;
    } else {
      return `within range by ${number - distance}`;
    }

  }
}

function produceTipCalculator(tipPercent) {
  return function (billAmount) {
    return billAmount*tipPercent
  }
}
