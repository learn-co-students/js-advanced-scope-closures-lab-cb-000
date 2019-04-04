function something(something){
  return function(something){
    return something
  };
}

function produceDrivingRange(distance){

  return function(start, finish){
    let s = start.replace(/\D/g,'');
    let f = finish.replace(/\D/g,'');
    let dist = Math.abs(s-f);
    if(dist > distance){
      return `${dist - distance} blocks out of range`;
    } else {
      return `within range by ${distance - dist}`;
    }

  };
}



function produceTipCalculator(prop){
  return function(fare){
    return prop * fare;
  };
}


function createDriver(){
  let driverId = 0;
  return class{
    constructor(name){
      this.name = name;
      this.id = ++driverId;
    }
  };
};
