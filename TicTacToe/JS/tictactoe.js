// This variable keeps track of whose turn it is:
let activePlayer = "X";
// This [] stores an [] of moves; used to determine win conditions:
let selectedSquares = [];

// This function places an "X" or "O" in a square:
function placeXorO(squareNumber) {
  /* This condition ensures a square hasn't been selected already.
   The .some method is used to check each element of selectedSquare []
   to see if it contains the square number clicked on.*/
  if (!selectedSquares.some((element) => element.includes(squareNumber))) {
    // This variable retrieves the ID of the html element that was clicked:
    let select = document.getElementById(squareNumber);
    // This condition checks whose turn it is:
    if (activePlayer === "X") {
      // If activePlayer is equal to "X", place the x.png in HTML:
      select.style.backgroundImage = "url('IMAGES/x.png')";
      // Active player may only be "X" or "O"; if not "X", it must be "O":
    } else {
      // If activePlayer is equal to "O", place the o.png in HTML:
      select.style.backgroundImage = "url('IMAGES/o.png')";
    }
    // squareNumber & activePlayer are concatenated and added to []:
    selectedSquares.push(squareNumber + activePlayer);
    // This calls a function to check for any win conditions:
    checkWinConditions();
    // This condition changes activePlayer:
    if (activePlayer === "X") {
      // If activePlayer is "X", change it to "O":
      activePlayer = "O";
      // Vice versa:
    } else {
      activePlayer = "X";
    }

    // This function plays the "placement" sound:
    audio("./MEDIA/place.mp3");
    // This condition checks if it is the computer's turn:
    if (activePlayer === "O") {
      // This function disables clicking for computer's choice:
      disableClick();
      // This function waits 1 second before computer places image & enables click:
      setTimeout(function () {
        computersTurn();
      }, 1000);
    }
    // Returning TRUE is needed for the computersTurn() to work:
    return true;
  }
  // This function results in a random square being selected:
  function computersTurn() {
    // This boolean is needed for our while loop:
    let success = false;
    // This variable stores a random number 0-8:
    let pickASquare;
    // This condition allows our while loop to keep trying if a square is selected already:
    while (!success) {
      // A random number between 0 & 8 is selected:
      pickASquare = String(Math.floor(Math.random() * 9));
      // If the random number evaluated returns TRUE, the square hasn't been selected yet:
      if (placeXorO(pickASquare)) {
        // This line calls the function:
        placeXorO(pickASquare);
        // This changes our boolean and ends the loop:
        success = true;
      }
    }
  }
}

/* This function parses the selectedSquares [] to search for win conditions.
drawWinLine() is called to draw a line if condition is met. */
function checkWinConditions() {
  // X 0, 1, 2 condition:
  if (arrayIncludes("OX", "1X", "2X")) {
    drawWinLine(50, 100, 558, 100);
  }
  // X 3, 4, 5 condition:
  else if (arrayIncludes("3X", "4X", "5X")) {
    drawWinLine(50, 304, 558, 304);
  }
  // X 6, 7, 8 condition:
  else if (arrayIncludes("6X", "7X", "8X")) {
    drawWinLine(50, 508, 558, 508);
  }
  // X 0, 3, 6 condition:
  else if (arrayIncludes("0X", "3X", "6X")) {
    drawWinLine(100, 50, 100, 558);
  }
  // X 1, 4, 7 condition:
  else if (arrayIncludes("1X", "4X", "7X")) {
    drawWinLine(304, 50, 304, 558);
  }
  // X 2, 5, 8 condition:
  else if (arrayIncludes("2X", "5X", "8X")) {
    drawWinLine(508, 50, 508, 558);
  }
  // x 6, 4, 2 condition:
  else if (arrayIncludes("6X", "4X", "2X")) {
    drawWinLine(100, 508, 510, 90);
  }
  // X 0, 4, 8 condition:
  else if (arrayIncludes("0X", "4X", "8X")) {
    drawWinLine(100, 100, 520, 520);
  }
  // O 0, 1, 2 condition:
  else if (arrayIncludes("0O", "1O", "2O")) {
    drawWinLine(50, 100, 558, 100);
  }
  // O 3, 4, 5 condition:
  else if (arrayIncludes("3O", "4O", "5O")) {
    drawWinLine(50, 304, 558, 304);
  }
  // O 6, 7, 8 condition:
  else if (arrayIncludes("6O", "7O", "8O")) {
    drawWinLine(50, 508, 558, 508);
  }
  // O 0, 3, 6 condition:
  else if (arrayIncludes("0O", "3O", "6O")) {
    drawWinLine(100, 50, 100, 558);
  }
  // O 1, 4, 7 condition:
  else if (arrayIncludes("1O", "4O", "7O")) {
    drawWinLine(304, 50, 304, 558);
  }
  // O 2, 5, 8 condition:
  else if (arrayIncludes("2O", "5O", "8O")) {
    drawWinLine(508, 50, 508, 558);
  }
  // O 6, 4, 2 condition:
  else if (arrayIncludes("6O", "4O", "2O")) {
    drawWinLine(100, 508, 510, 90);
  }
  // O 0, 4, 8 condition:
  else if (arrayIncludes("0O", "4O", "8O")) {
    drawWinLine(100, 100, 520, 520);
  }
  //* This condition checks for a tie.  If none of the above conditions register
  // and all 9 squares have been selected, the code executes
  else if (selectedSquares.length >= 9) {
    // This function plays the "tie game" sound:
    audio("./MEDIA/tie.mp3");
    // This function sets a .3 second timer before the resetGame() is called:
    setTimeout(function () {
      resetGame();
    }, 1000);
  }

  // This function checks if an [] includes 3 strings (checks for each win condition):
  function arrayIncludes(squareA, squareB, squareC) {
    // These 3 variables will be used to check for 3 in a row:
    const a = selectedSquares.includes(squareA);
    const b = selectedSquares.includes(squareB);
    const c = selectedSquares.includes(squareC);
    /* If the 3 variables we pass are all included in our [], TRUE is returned, 
    and our else/if condition executes drawWinLine() */
    if (a === true && b === true && c === true) {
      return true;
    }
  }
}

// This function makes the body element temporarily unclickable:
function disableClick() {
  // This makes the body unclickable:
  body.style.pointerEvents = "none";
  // This makes the body clickable again after 1 second:
  setTimeout(function () {
    body.style.pointerEvents = "auto";
  }, 1000);
}

/* This function takes a string parameter of the path set eariler for the 
"placement" sound ("./MEDIA/place.mp3"): */
function audio(audioURL) {
  // New audio object is created, passing the path as a parameter:
  let audio = new Audio(audioURL);
  // This ".play" method plays the audio sound:
  audio.play();
}

// This function utilizes HTML canvas to draw win lines:
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
  // This line accesses the HTML canvas element:
  const canvas = document.getElementById("win-lines");
  // This line gives us access to methods & properties to use on canvas:
  const c = canvas.getContext("2d");
  // This line indicates where a line's "X-axis" begins:
  let x1 = coordX1;
  // This line indicates where a line's "Y-axis" begins:
  y1 = coordY1;
  // This line indicates where a line's "X-axis" ends:
  x2 = coordX2;
  // This line indicates where a line's "Y-axis" ends:
  y2 = coordY2;
  // This variable stores temporary "X-axis" data we update in the animation loop:
  x = x1;
  // This variable stores temporary "Y-axis" data we update in the animation loop:
  y = y1;

  // This function interacts with the canvas:
  function animateLineDrawing() {
    // This variable creates a loop:
    const animationLoop = requestAnimationFrame(animateLineDrawing);
    // This method clears content from last loop iteration:
    c.clearRect(0, 0, 608, 608);
    // This method starts a new path:
    c.beginPath();
    // This method moves us to the line's starting point:
    c.moveTo(x1, y1);
    // This method indicates the line's end point:
    c.lineTo(x, y);
    // This method sets the line's width:
    c.lineWidth = 10;
    // This method sets the line's color:
    c.strokeStyle = "rgba(70, 255, 33, .8)";
    // This method draws everything laid out above:
    c.stroke();
    // This condition checks if the endpoint's been reached:
    if (x1 <= x2 && y1 <= y2) {
      // This condition adds 10 to the previous end X point:
      if (x < x2) {
        x += 10;
      }
      // This condition adds 10 to the previous end Y point:
      if (y < y2) {
        y += 10;
      }
      // This condition cancels the animation loop if the end points are reached:
      if (x >= x2 && y >= y2) {
        cancelAnimationFrame(animationLoop);
      }
    }
    /* This condition is similar to the one above;
    (necessary for the "6, 4, 2" win condition): */
    if (x1 <= x2 && y1 >= y2) {
      if (x < x2) {
        x += 10;
      }
      if (y > y2) {
        y -= 10;
      }
      if (x >= x2 && y <= y2) {
        cancelAnimationFrame(animationLoop);
      }
    }
  }
  // This function clears the canvas after the win line is drawn:
  function clear() {
    // This line starts the animation loop:
    const animationLoop = requestAnimationFrame(clear);
    // This line clears the canvas:
    c.clearRect(0, 0, 608, 608);
    // This line stops the animation loop:
    cancelAnimationFrame(animationLoop);
  }

  // This line disallows clicking while the "win" sound is playing:
  disableClick();
  // This line plays the "win" sound:
  audio("./MEDIA/winGame.mp3");
  // This line calls the main animation loop:
  animateLineDrawing();
  // This line waits 1 second, then clears canvas, resets game, & allows clicking again:
  setTimeout(function () {
    clear();
    resetGame();
  }, 1000);
}

// This function resets the game in the event of a tie or a win:
function resetGame() {
  // This "for loop" iterates through each HTML square element:
  for (let i = 0; i < 9; i++) {
    // This variable gets the HTML element of "i":
    let square = document.getElementById(String(i));
    // This removes our element's backgroundImage:
    square.style.backgroundImage = "";
  }
  // This resets our array so it is empty and we can start over:
  selectedSquares = [];
}
