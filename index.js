function theBeatlesPlay(musicians, instruments) {
  var statementsArray = [];
  var counter;
  for (counter = 0; counter < musicians.length; counter++) {
    var statement = musicians[counter] + " plays " + instruments[counter];
    statementsrray.push(statement);
  }
  return statementsArray
}

function johnLennonFacts(facts) {
  var loudfactsArray = [];
  var counter = 0;
  while (counter < facts.length) {
    var loudfact = facts[counter] + "!!!"
    loudFactsArray.push(loudfact);
    counter++;
  }
  return loudfactsArray
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