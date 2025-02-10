//1s.this function present is font page----------------------
function play() {
  hiddenItem("home");
  hiddenItem("finalResult"); //goto 1c
  showItem("playGround"); //goto 2c

  setTextElementByID("score", 0);
  setTextElementByID("lifeNumber", 5);
  continueGame(); //goto 2s
}

//2s. this function present in play ground-------------------------
function continueGame() {
  const alphabet = randomAplabet(); //goto 3c
  console.log(alphabet);
  //set alphabte in display
  const text = document.getElementById("diplayAlphabate");
  text.innerText = alphabet;
  setkbdColor(alphabet);
}

//3s.keypress function create her-----------------------------------
function keyFunction(event) {
  const pressedAlphabate = event.key;
  //game end
  if (pressedAlphabate === "Escape") {
    gameOver();
  }
  const showAlphabate = document.getElementById("diplayAlphabate");
  const displayAlphabate = showAlphabate.innerText;

  if (pressedAlphabate === displayAlphabate) {
    // get life number and set number
    const setScore = getTextElementById("score");
    const score = setScore + 1;
    setTextElementByID("score", score);

    //game continue and remove bg of keyboard
    removeBgKeyboard(pressedAlphabate);
    continueGame();
  } else {
    console.log("did not match");
    //get life number
    const getlife = getTextElementById("lifeNumber");
    const life = getlife - 1;
    setTextElementByID("lifeNumber", life);
    if (life === 0) {
      gameOver(); //4c
    }
  }
}

//3s1.key press event-------------------------
document.addEventListener("keyup", keyFunction);
