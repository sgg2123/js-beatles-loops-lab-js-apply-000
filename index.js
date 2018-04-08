function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  var counter;
  for (counter = 0; counter <=3; counter++) {
    var newString = musicians[counter] + " plays " + instruments[counter];
    newArray.push(newString);
  }

  return newArray
}

function johnLennonFacts(facts) {
  var newArray = [];
  var counter = 0;
  while (counter<facts.length) {
    var loudfact = facts[counter] + "!!!"
    newArray.push(loudfact);
    counter++;
  }
  return newArray
}

function iLoveTheBeatles(number) {
  var newArray = []
  do {
    newArray.push("I love the Beatles!")
    number++
  }
  while (number <15);
  return newArray
}