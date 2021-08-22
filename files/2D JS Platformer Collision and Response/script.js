const canvas = document.querySelector("#canvas");
canvas.width = innerWidth;
canvas.height = 240;
//document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");
let animation;

class Matrix {
  constructor(x, y, tw, th, col, data) {
    this.x = x;
    this.y = y;
    this.tw = tw;
    this.th = th;
    this.col = col;
    this.data = data;
    this.column = data[0].length;
    this.row = data.length;
    this.w = Math.ceil(tw/this.column);
    this.h = Math.ceil(th/this.row);
    this.index = 0;
    this.rowIndex = 0;
  }
  draw() {
    for (let y = 0; y < this.th; y += this.h) {
      for (let x = 0; x < this.tw; x += this.w) {
        const currentRow = this.data[this.rowIndex];
        const item = currentRow[this.index];

        const color = this.col[item];

        ctx.fillStyle = color;
        ctx.fillRect(this.x + x, this.y + y, this.w, this.h);

        this.index++;
        if (this.index == currentRow.length) {
          this.rowIndex++;
          this.index = 0;
        }
        if (this.rowIndex == this.data.length) {
          this.rowIndex = 0;
        }
      }
    }
  }
  update() {
    this.draw();
  }
}

class Player {
  constructor(x, y, old_x, old_y, w, h, color) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.velocity = {
      x: 0,
      y: 0
    };
    this.old_x = old_x;
    this.old_y = old_y;
    this.color = color;
    this.jumping = false;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}


let colors = ["#b2dee9", "#162225"];
let data = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
  [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
  [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1,1,1,0,0,0,0,0,0,0,0,1,0,0,0],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];
let collisionMap = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [5,0,0,0,0,0,5,5,0,0,0,0,0,0,0],
  [5,0,0,0,5,0,0,0,0,0,0,0,0,0,0],
  [5,5,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [5,5,5,0,0,0,0,0,0,0,0,5,0,0,0],
  [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]
];

let controller = {
  left: false,
  right: false,
  up: false
};

let map = new Matrix(0, 0, canvas.width, canvas.height, colors, data);
console.log(map)

let player = new Player(10, 10, 30, 30, 15, 15, "#09f");

let collision = {
  // Bottom of tile
  1: function(object, row, column) {
    this.bottomCollision(object, row);
  },

  // right of tile
  2:function(object, row, column) {
    this.rightCollision(object, column);

  },

  // left of tile
  3:function(object, row, column) {

    this.leftCollision(object, column);

  },

  // top of tile
  4:function(object, row, column) {

    this.topCollision(object, row);

  },

  // All side of tile
  5:function(object, row, column) {

    if (this.topCollision(object, row)) {
      return;
    }
    if (this.leftCollision(object, column)) {
      return;
    }
    if (this.rightCollision(object, column)) {
      return;
    }
    this.bottomCollision(object, row);

  },


  topCollision(object, row) {
    if (object.y - object.old_y > 0) {
      let top = row * map.w;

      if (object.y + object.h > top && object.old_y + object.h <= top) {
        object.jumping = false;
        object.velocity.y = 0;
        object.old_y = object.y = top - object.h - 0.01;
        //console.log(object.y)

        return true;
      }

    }
    return false;
  },

  bottomCollision(object, row) {

    // if the object is moving up
    if (object.y - object.old_y < 0) {

      var bottom = (row + 1) * map.w;

      if (object.y < bottom && object.old_y >= bottom) {

        object.velocity.y = 0;
        object.old_y = object.y = bottom;

      }

    }

  },

  rightCollision(object, column) {

    if (object.x - object.old_x < 0) {

      var right = (column + 1) * map.w;

      if (object.x < right && object.old_x >= right) {

        object.velocity.x = 0;
        object.old_x = object.x = right;


        return true;

      }

    }

    return false;

  },

  leftCollision(object, column) {
    if (object.x - object.old_x > 0) {
      let left = column * map.w;

      if (object.x + object.w > left && object.old_x + object.w <= left) {
        object.velocity.x = 0;
        object.x = object.old_x = left - object.w - 0.001;

        return true;
      }
    }

    return false;
  }
};


let isUpPressed;


function animate() {
  animation = requestAnimationFrame(animate);
  ctx.fillStyle = "#202830";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  map.update();
  player.draw();


  if (controller.left) {
    player.velocity.x -= 0.25;
  }
  if (controller.right) {
    player.velocity.x += 0.25;
  }
  if (controller.up) {
    player.velocity.y = -16;
    player.jumping = true;
  }

  player.velocity.y += 1;

  player.old_x = player.x;
  player.old_y = player.y;

  player.x += player.velocity.x;
  player.y += player.velocity.y;


  if (player.x < 0) {
    player.velocity.x = 0;
    player.old_x = player.x = 0;
  } else if (player.x + player.w > canvas.width) {
    player.velocity.x = 0;
    player.old_x = player.x = canvas.width - player.w;
  }

  if (player.y < 0) {
    player.velocity.y = 0;
    player.old_y = player.y = 0;
  } else if (player.y + player.h > canvas.height) {
    player.velocity.y = 0;
    player.old_y = player.y = canvas.height - player.h;
  }

  // map.w is actually each tiles size
  /*
        tileX = Math.floor((player.x + player.w * 0.5) / map.w);
        tileY = Math.floor((player.y + player.h) / map.w);
        valueAtIndex = collisionMap[tileY][tileX];
        //document.querySelector("#demo").innerHTML = valueAtIndex;
        if(valueAtIndex == 5) {
          collision[valueAtIndex](player, tileY, tileX);
        }
        tileX = Math.floor((player.x + player.w * 0.5) / map.w);
        tileY = Math.floor((player.y + player.h) / map.w);
        valueAtIndex = collisionMap[tileY][tileX];
        //document.querySelector("#demo").innerHTML = valueAtIndex;
        if(valueAtIndex != 0) {
          collision[valueAtIndex](player, tileY, tileX);
        }
        */


  // Tile based collision
  // Right side of tile
  if (player.x - player.old_x < 0) {
    //console.log("if")
    // Is the player moving right?

    var tileX = Math.floor(player.x / map.w);
    var tileY = Math.floor((player.y + player.h) / map.w);
    let valueAtIndex = collisionMap[tileY][tileX];
    //console.log(valueAtIndex)
    if (valueAtIndex != 0) {
      // Check the bottom right point

      collision[valueAtIndex](player, tileY, tileX);
      /*display.output.innerHTML = "last tile collided with: " + value_at_index;*/

    }

    var top_row = Math.floor(player.y / map.w);
    valueAtIndex = collisionMap[top_row][tileX];

    if (valueAtIndex != 0) {
      // Check the top right point

      collision[valueAtIndex](player, top_row, tileX);
      /*display.output.innerHTML = "last tile collided with: " + value_at_index;*/

    }

  }

  // left side of tile
  else if (player.x - player.old_x > 0) {
    // Is the player moving right?
    //console.log("else if")
    var tileX = Math.floor((player.x + player.w) / map.w);
    var tileY = Math.floor((player.y + player.h) / map.w);
    let valueAtIndex = collisionMap[tileY][tileX];

    if (valueAtIndex != 0) {
      // Check the bottom right point

      collision[valueAtIndex](player, tileY, tileX);
      /*display.output.innerHTML = "last tile collided with: " + value_at_index;*/

    }

    var top_row = Math.floor(player.y / map.w);
    valueAtIndex = collisionMap[top_row][tileX];

    if (valueAtIndex != 0) {
      // Check the top right point

      collision[valueAtIndex](player, top_row, tileX);
      /*display.output.innerHTML = "last tile collided with: " + value_at_index;*/

    }

  }

  // Top of tile
  if (player.y - player.old_y < 0) {
    console.log("y")
    var left_column = Math.floor(player.x / map.w);
    var top_row = Math.floor(player.y / map.w);
    let valueAtIndex = collisionMap[top_row][left_column];

    if (valueAtIndex != 0) {
      // Check the top left point

      collision[valueAtIndex](player, top_row, left_column);
      /*display.output.innerHTML = "last tile collided with: " + value_at_index;*/

    }

    var right_column = Math.floor((player.x + player.w) / map.w);
    valueAtIndex = collisionMap[top_row][right_column];

    if (valueAtIndex != 0) {
      // Check the top right point

      collision[valueAtIndex](player, top_row, right_column);
      /*display.output.innerHTML = "last tile collided with: " + value_at_index;*/

    }

  }

  // Bottom of tile
  else if (player.y - player.old_y > 0) {

    var left_column = Math.floor(player.x / map.w);
    var bottom_row = Math.floor((player.y + player.h) / map.w);
    var valueAtIndex = collisionMap[bottom_row][left_column];

    if (valueAtIndex != 0) {
      // Check the bottom left point

      collision[valueAtIndex](player, bottom_row, left_column);
      /*display.output.innerHTML = "last tile collided with: " + value_at_index;*/

    }

    var right_column = Math.floor((player.x + player.w) / map.w);
    valueAtIndex = collisionMap[bottom_row][right_column];

    if (valueAtIndex != 0) {
      // Check the bottom right point

      collision[valueAtIndex](player, bottom_row, right_column);

    }

  }



  player.velocity.x *= 0.9;
  player.velocity.y *= 0.9;


  if (player.jumping) {
    controller.up = false;
  }
  if (isUpPressed && !player.jumping) {
    player.jumping = true;
    controller.up = true;
  }


}
animate()



document.querySelector("#left").addEventListener("touchstart", () => {
  controller.left = true;
})
document.querySelector("#left").addEventListener("touchend", () => {
  controller.left = false;
})

document.querySelector("#right").addEventListener("touchstart", () => {
  controller.right = true;
})
document.querySelector("#right").addEventListener("touchend", () => {
  controller.right = false;
})

document.querySelector("#jump").addEventListener("touchstart", () => {
  isUpPressed = true;

  let left_column = Math.floor(player.x / map.w);
  let top_row = Math.floor(player.y / map.w);
  let valueAtIndex = collisionMap[top_row][left_column];

  if (valueAtIndex != 0) {
    controller.up = true;
  }

})
document.querySelector("#jump").addEventListener("touchend", () => {
  isUpPressed = false;
  controller.up = false;
})
