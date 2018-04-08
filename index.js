function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  var counter;
  for (counter = 0; counter <=3; counter++) {
    var newString = musicians[counter] + " plays " + instruments[counter];
    emptyArray.push(newString);
  }

  return emptyArray
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
  var emptyArray = []
  do {
    emptyArray.push("I love the Beatles!")
    number++
  }
  while (number <15);
  return emptyArray
}