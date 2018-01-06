function theBeatlesPlay(musicians, instruments){
  var newArray = new Object{};
  for (var i = 0; i < musicians.length; i++){
    newArray[i] = musicians[i] + " plays " + instruments[i];
    return newArray;
  }
}