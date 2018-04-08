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
  var counter = 0;
  while (counter<4) {
    var newArray = [];
    loudfact = facts[counter] +"!!!"
    newArray.push(loudfact);
    counter++;
  }
  return newArray
}