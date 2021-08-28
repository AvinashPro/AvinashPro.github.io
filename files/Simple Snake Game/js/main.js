const a = text => console.log(text);
// This is the root function
function root() {
  // This is selector function
  const select = selector => document.querySelector(selector);

  // Selecting Canvas and setting its properties
  const width = 300;
  const height = 400;
  const canvas = select("canvas");
  canvas.width = width;
  canvas.height = height;

  // Selecting controls
  const upBtn = select("#up-btn");
  const downBtn = select("#down-btn");
  const leftBtn = select("#left-btn");
  const rightBtn = select("#right-btn");

  // Checking if buttons are active
  let upBtnActive = false;
  let downBtnActive = false;
  let leftBtnActive = false;
  let rightBtnActive = false;

  // Creating variable for game over

  // Selecting score element
  let scoreElm = select("#score");
  let score = 0;

  // Getting 2d context
  const ctx = canvas.getContext("2d");

  // Creating food class
  class Food {
    constructor(x, y, width, height, color) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.color = color;
    }
    draw() {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    update() {
      this.draw();
    }
  }

  // Creating food
  let foodArray = [];

  let foodX = Math.random() * (width - 15);
  let foodY = Math.random() * (height -15);
  let foodWidth = 10;
  let foodHeight = 10;
  let foodColor = "#ff4200";
  let food = new Food(foodX, foodY, foodWidth, foodHeight, foodColor);

  foodArray.push(food);

  // Creating snake
  let snakeArray = [];
  let snakeWidth = 10;
  let snakeHeight = 10;
  let snakeLength = 10;
  let snakeHeadX = Math.random() * (width - 30);
  let snakeHeadY = Math.random() * (height - 30);
  let snakeColor = "#00ff79";
  let velocity = {
    x: 1.3,
    y: 1.3
  }

  // This function is used to draw snake
  function draw(x, y) {
    ctx.fillStyle = snakeColor;
    ctx.fillRect(x, y, snakeWidth, snakeHeight);
  }

  // Pushing head to snake array
  for (i = 0; i < snakeLength; i++) {
    snakeArray.push(
      {
        x: snakeHeadX,
        y: snakeHeadY
      }
    );
  }


  // This function is used to draw Snake and increment length of snake, generating food, collision of objects and many others function
  let animationType;
  function animate() {
    animationType = requestAnimationFrame(animate);

    // Clearing previous rendering
    ctx.fillStyle = "#191d21";
    ctx.fillRect(0, 0, width, height);

    // Iterating all snakes from snakeArray and drawing them to the canvas
    snakeArray.forEach((snake, index) => {
      let x = snake.x;
      let y = snake.y;
      draw(x, y)
    })

    // x and y of snake head
    let snakeX = snakeArray[0].x;
    let snakeY = snakeArray[0].y;



    // Moving snake in all directons and changing its velocity
    if (upBtnActive) {
      upBtn.style.background = "#006499";
      snakeY -= velocity.y;
    } else {
      upBtn.style.background = "#008ad3";
    }


    if (downBtnActive) {
      downBtn.style.background = "#006499";
      snakeY += velocity.y;
    } else {
      downBtn.style.background = "#008ad3";
    }


    if (leftBtnActive) {
      leftBtn.style.background = "#006499";
      snakeX -= velocity.x;
    } else {
      leftBtn.style.background = "#008ad3";
    }


    if (rightBtnActive) {
      rightBtn.style.background = "#006499";
      snakeX += velocity.x;
    } else {
      rightBtn.style.background = "#008ad3";
    }



    // Creating function to check collision of two objects
    function collision(object1, object2) {
      return Math.hypot(object1.x - object2.x, object1.y - object2.y);
    }



    // Detecting collision of snake and food and generating new food
    const distance = collision(foodArray[0], snakeArray[0]);

    if (distance < 10) {
      foodArray.splice(0, 1)
      foodArray.push(new Food(Math.random()*(width-15), Math.random()*(height-15), foodWidth, foodHeight, foodColor));

      // Creating new head from previous element
      let newHead = {
        x: snakeX,
        y: snakeY
      }

      // Adding 10 new head to snakeArray in starting
      snakeArray.unshift(newHead);
      snakeArray.unshift(newHead);
      snakeArray.unshift(newHead);
      snakeArray.unshift(newHead);
      snakeArray.unshift(newHead);
      snakeArray.unshift(newHead);
      snakeArray.unshift(newHead);
      snakeArray.unshift(newHead);
      snakeArray.unshift(newHead);
      snakeArray.unshift(newHead);

      // Increasing score
      score += 10;
      scoreElm.innerHTML = score;
    } else {
      // Removing last element from snakeArray [snake's tail]
      snakeArray.pop();

      // Creating new head from previous head
      let newHead = {
        x: snakeX,
        y: snakeY
      }

      // Adding new head to snakeArray in starting
      snakeArray.unshift(newHead);
    }
    foodArray[0].update();


    // Detecting collision of snake and wall
    /*if(snakeX < 0) {
                snakeX = width;
            }
            else if(snakeX > width) {
                snakeX = 0;
            }
            else if(snakeY < 0) {
                snakeY = height;
            }
            else if(snakeY > height) {
                snakeY = 0;
            }*/

    // Detecting collision of snake and wall and overing the game
    if (snakeX < 0 || snakeX > width || snakeY < 0 || snakeY > height) {
      gameOver()
    }

    // Creating function for game over
    function gameOver() {
      // Canceling animation which stops the game
      cancelAnimationFrame(animationType);
      ctx.fillStyle = "#171e25";
      ctx.fillRect(0, 0, width, height);

      // Displaying some texts
      let text1 = "Game Over!";
      let text2 = "Press to continue...";
      let text3 = "- - - - - ©Made by Avinash - - - - -";

      ctx.font = "42px sans-serif";
      ctx.fillStyle = "#fff";
      ctx.textAlign = "center";

      ctx.fillText(text1, width / 2, 70);

      ctx.font = "18px sans-serif";
      ctx.fillText(text2, width / 2, 120);
      ctx.fillText(text3, width / 2, 170);

      // Adding Event listener which runs root function when click on canvas
      canvas.addEventListener("click", () => {
        score = 0;
        scoreElm.innerHTML = score;
        root()
      })
    }
  }
  animate()


  // Creating event listener for clicking on buttons
  upBtn.addEventListener("touchend", ()=> {
    rightBtnActive = false;
    leftBtnActive = false;
    upBtnActive = true;
    downBtnActive = false;
  });

  downBtn.addEventListener("touchend", ()=> {
    rightBtnActive = false;
    leftBtnActive = false;
    upBtnActive = false;
    downBtnActive = true;
  });

  leftBtn.addEventListener("touchend", ()=> {
    leftBtnActive = true;
    rightBtnActive = false;
    upBtnActive = false;
    downBtnActive = false;
  });

  rightBtn.addEventListener("touchend", ()=> {
    rightBtnActive = true;
    leftBtnActive = false;
    upBtnActive = false;
    downBtnActive = false;
  });
}

root()
