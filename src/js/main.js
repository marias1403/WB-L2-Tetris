import '../assets/styles/index.css';

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.game__container');
  let squares = Array.from(document.querySelectorAll('.game__cell'));
  const scoreDisplay = document.querySelector('#game-score');
  const startBtn = document.querySelector('.game__restart-button');
  const width = 10;
  const colors = ['orange', 'red', 'purple', 'green', 'blue'];

  // Game vars
  let currentPosition = 4;
  let currentRotation = 0;
  let nextRandom = 0;
  let timerId;
  let score = 0;
  let isEnd = false;

  const lShape = [
    [1, width+1, width*2+1, 2],
    [width, width+1, width+2, width*2+2],
    [1, width+1, width*2+1, width*2],
    [width, width*2, width*2+1, width*2+2]
  ];
  const zShape = [
    [0, width, width+1, width*2+1],
    [width+1, width+2, width*2, width*2+1],
    [0, width, width+1, width*2+1],
    [width+1, width+2, width*2, width*2+1]
  ];
  const tShape = [
    [1, width, width+1, width+2],
    [1, width+1, width+2, width*2+1],
    [width, width+1, width+2, width*2+1],
    [1, width, width+1, width*2+1]
  ];
  const oShape = [
    [0, 1, width, width+1],
    [0, 1, width, width+1],
    [0, 1, width, width+1],
    [0, 1, width, width+1]
  ];
  const iShape = [
    [1, width+1, width*2+1, width*3+1],
    [width, width+1, width+2, width+3],
    [1, width+1, width*2+1, width*3+1],
    [width, width+1, width+2, width+3]
  ];
  const shapes = [lShape, zShape, tShape, oShape, iShape];

  // randomly select shape
  let random = Math.floor(Math.random() * shapes.length);
  let current = shapes[random][currentRotation];

  startBtn.addEventListener('click', startGame);
  document.addEventListener('keyup', control);


  function startGame() {
    if (timerId) {
      clearInterval(timerId);
      timerId = null;
    }

    clearGrid();
    resetGameVariables();
    draw();
    timerId = setInterval(moveDown, 1000);
    displayShape();
  }

  function clearGrid() {
    for (let i = 0; i < 200; i++) {
      squares[i].classList.remove('game__cell_taken');
      squares[i].style.backgroundColor = '';
    }
  }

  function resetGameVariables() {
    random = Math.floor(Math.random() * shapes.length);
    nextRandom = Math.floor(Math.random() * shapes.length);
    currentPosition = 4;
    currentRotation = 0;
    current = shapes[random][currentRotation];
    score = 0;
    scoreDisplay.innerHTML = score;
    isEnd = false;
  }

  function drawCell(index, color) {
    squares[currentPosition + index].style.backgroundColor = color;
  }

  function undraw() {
    current.forEach(index => drawCell(index, ''));
  }

  function draw() {
    current.forEach(index => drawCell(index, colors[random]));
  }

  function control(e) {
    if (isEnd) {
      return
    }

    if (e.keyCode === 37) {
      moveLeft();
    } else if (e.keyCode === 38) {
      rotate();
    } else if (e.keyCode === 39) {
      moveRight();
    } else if (e.keyCode === 40) {
      moveDown();
    }
  }

  // move down function
  function moveDown() {
    undraw();
    currentPosition += width;
    draw();
    freeze();
  }

  function moveLeft() {
    undraw();
    const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0);
    if (!isAtLeftEdge) currentPosition -= 1;
    if (current.some(index => squares[currentPosition + index].classList.contains('game__cell_taken'))) {
      currentPosition += 1;
    }
    draw();
  }

  function moveRight() {
    undraw();
    const isAtRightEdge = current.some(index => (currentPosition + index) % width === width - 1);
    if (!isAtRightEdge) currentPosition += 1;
    if (current.some(index => squares[currentPosition + index].classList.contains('game__cell_taken'))) {
      currentPosition -= 1;
    }
    draw();
  }

  function freeze() {
    if (current.some(index => squares[currentPosition + index + width].classList.contains('game__cell_taken'))) {
      current.forEach(index => squares[currentPosition + index].classList.add('game__cell_taken'));
      // start a new tetromino falling
      random = nextRandom;
      nextRandom = Math.floor(Math.random() * shapes.length);
      current = shapes[random][currentRotation];
      currentPosition = 4;
      draw();
      displayShape();
      addScore();
      gameOver();
    }
  }

  function checkRotatedPosition(P) {
    P = P || currentPosition;
    if ((P+1) % width < 4) {
      if (current.some(index => (currentPosition + index + 1) % width === 0)) {
        currentPosition += 1;
        checkRotatedPosition(P);
      }
    } else if (P % width > 5) {
      if (current.some(index => (currentPosition + index) % width === 0)) {
        currentPosition -= 1;
        checkRotatedPosition(P);
      }
    }
  }

  function rotate() {
    undraw();
    currentRotation++;
    if (currentRotation === current.length) {
      currentRotation = 0;
    }
    current = shapes[random][currentRotation];
    checkRotatedPosition();
    draw();
  }

  // Next shape display
  const nextShapeSquares = document.querySelectorAll('.game__next-wrapper div');
  const nextShapeWidth = 4;
  const nextShapeIndex = 0;

  const nextShapes = [
    [1, nextShapeWidth+1, nextShapeWidth*2+1, 2],
    [0, nextShapeWidth, nextShapeWidth+1, nextShapeWidth*2+1],
    [1, nextShapeWidth, nextShapeWidth+1, nextShapeWidth+2],
    [0, 1, nextShapeWidth, nextShapeWidth+1],
    [1, nextShapeWidth+1, nextShapeWidth*2+1, nextShapeWidth*3+1],
  ];

  function displayShape() {
    nextShapeSquares.forEach(square => {
      square.style.backgroundColor = '';
    });
    nextShapes[nextRandom].forEach(index => {
      nextShapeSquares[nextShapeIndex + index].style.backgroundColor = colors[nextRandom];
    });
  }

  function addScore() {
    for (let i = 0; i < 200; i += width) {
      const row = [i, i+1, i+2, i+3, i+4, i+5, i+6, i+7, i+8, i+9];

      if (row.every(index => squares[index].classList.contains('game__cell_taken'))) {
        score += 10;
        scoreDisplay.innerHTML = score;
        row.forEach(index => {
          squares[index].classList.remove('game__cell_taken');
          squares[index].style.backgroundColor = '';
        });
        const squaresRemoved = squares.splice(i, width);
        squares = squaresRemoved.concat(squares);
        squares.forEach(cell => grid.appendChild(cell));
      }
    }
  }

  function gameOver() {
    if (current.some(index => squares[currentPosition + index].classList.contains('game__cell_taken'))) {
      scoreDisplay.innerHTML = 'end';
      clearInterval(timerId);
      isEnd = true;
    }
  }
});
