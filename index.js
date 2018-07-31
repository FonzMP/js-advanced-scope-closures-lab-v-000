function produceDrivingRange(blockRange) {
  return function(start, end) {
    const startInt = start.substring(0, 2)
    const endInt = end.substring(0, 2)
    let message = ''

    const distance = endInt - startInt
    const difference = blockRange - distance
    if (difference <= 0 ) {
      message = `${-difference} blocks out of range` 
    } else {
      message = `within range by ${blockRange - difference}`
    }
    return message;
  }
}

function produceTipCalculator(percentTip) {
  return function(multiplier) {
    return multiplier * percentTip
  }
}

