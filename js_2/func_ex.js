function sleepIn(weekday, vacation) {
  if (!weekday || vacation) {
    return true;
  }
  return false;
}

function monkeyTrouble(aSmile, bSmile) {
  if ( (aSmile && bSmile) || !(aSmile || bSmile) ) {
    return true;
  }
  return false;
}

function stringTimes(str, n) {
  var newStr = "";
  for (var i = 0; i < n; i++) {
    newStr += str;
  }
  return newStr;
}

function luckySum(a, b, c) {
  if (a === 13) {
    return 0;
  }
  if (b === 13) {
    return c;
  }
  if(c === 13) {
    return a + b;
  }
  return a + b + c;
}

function caught_speeding(speed, isBirthday) {
  var safeSpeed = 60;
  var bigTicketSpeed = 81;

  if(isBirthday){
    safeSpeed += 5;
    bigTicketSpeed += 5;
  }

  if (speed <= safeSpeed) {
    return 0;
  }
  if(speed > safeSpeed && speed < bigTicketSpeed) {
    return 1;
  }
  return 2;
}

function makeBricks(small, big, goal) {
  while (goal >= 5 && big > 0) {
    goal -= 5;
    big--;
  }
  while (goal > 0 && small > 0) {
    goal--;
    small--;
  }
  return goal === 0;
}
