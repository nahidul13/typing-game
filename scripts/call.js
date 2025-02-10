//1c.page hidden
function hiddenItem(hiddenId) {
  const homePage = document.getElementById(hiddenId);
  homePage.classList.add("hidden");
}

//2c.page show
function showItem(showId) {
  const play = document.getElementById(showId);
  play.classList.remove("hidden");
}

//3c.random function generate
function randomAplabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alpabet = alphabetString.split("");
  const randomNumber = Math.random() * 25;
  const num = Math.round(randomNumber);
  const val = alpabet[num];
  return val;
}

//4c.set background Color in keyboard function
function setkbdColor(alphabet) {
  const keyboard = document.getElementById(alphabet);
  keyboard.classList.add("bg-cyan-700");
}

//5c. removed bg color in key board
function removeBgKeyboard(keyId) {
  const keyid = document.getElementById(keyId);
  keyid.classList.remove("bg-cyan-700");
}

//gettext element by id _----_---_>
function getTextElementById(elementId) {
  const settext = document.getElementById(elementId);
  const ConvertInt = parseInt(settext.innerText);
  return ConvertInt;
}
// set text element by id----------------
function setTextElementByID(elementId, num) {
  const settext = document.getElementById(elementId);
  settext.innerText = num;
}

// 4s. game if over show result
function gameOver() {
  hiddenItem("playGround");
  showItem("finalResult");
  //result show
  const result = getTextElementById("score");
  setTextElementByID("yourResult", result);
  //remove alphabate background
  const prvAlphabet = document.getElementById("diplayAlphabate");
  removeBgKeyboard(prvAlphabet.innerText);
}
