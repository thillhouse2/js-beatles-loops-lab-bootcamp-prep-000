function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  for (var i = 0; i < musicians.length; i++){
    console.log(musicians.length)
    newArray[i] = musicians[i] + " plays " + instruments[i];
    console.log([i] + ' ' + newArray[i] + ' ' + newArray.length + '\r \r');
  }
}