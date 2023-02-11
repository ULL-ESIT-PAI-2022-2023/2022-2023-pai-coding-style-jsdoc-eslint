function playVideoGame (playTimeInMinutes, gameName) {
  let time = 0;
  while (time < playTimeInMinutes) {
    play(gameName);
    ++time; 
  }
  let bookName = 'The catcher in the rye';
  readBook(bookName);
  let ytVideos = ['The Net Ninja','Life of Luba'];
  watchYT(ytVideos);
}
// Function modularized
function doHobbies (gameName, bookName, ytVideos) {
  playVideoGame(60, gameName);
  readBook(bookName);
  watchYT(ytVideos);
}
