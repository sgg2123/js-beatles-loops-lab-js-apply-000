var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  var counter;
  for (counter = 0; counter <=3; counter++) {
    var newString = musicians[counter] + " plays " + instruments[counter];
    emptyArray.push(newString);
  }

  return emptyArray
}

function johnLennonFacts() {
  return
}