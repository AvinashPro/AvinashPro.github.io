const $ = s => document.querySelector(s);
const a = a => console.log(a);
const canvas = document.createElement("canvas");
canvas.width = 300;
canvas.height = 300;
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");
let animation, gridBlocks = [];

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
    this.w = tw/this.column;
    this.h = th/this.row;
    this.index = 0;
    this.rowIndex = 0;
  }
  draw() {
    for (let y = 0; y < this.th; y += this.h) {
      for (let x = 0; x < this.tw; x += this.w) {
        const currentRow = this.data[this.rowIndex];
        const item = currentRow[this.index];

        const color = this.col[item];

        if (gridBlocks.length != this.column * this.row) {
          gridBlocks.push(new Box(this.x + x, this.y + y, this.w, this.h, "#0000"));
        }

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

class Box {
  constructor(x, y, w, h, col) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.col = col;
    this.type = "stroke";
  }
  draw() {
    ctx[`${this.type}Style`] = this.col;
    ctx[`${this.type}Rect`](this.x, this.y, this.w, this.h);
  }
  update() {
    this.draw();
  }
}



const gridColor = ["#000"];
const gridData = [];
let column = prompt("Enter no. of column", "15"), row = prompt("Enter no. of rows", "15");

for (r = 0; r < row; r++) {
  arr = [];
  for (c = 0; c < column; c++) {
    arr.push(0);
  }
  gridData.push(arr);
}

const grid = new Matrix(0, 0, canvas.width, canvas.height, gridColor, gridData);


function animate() {
  animation = requestAnimationFrame(animate);
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  grid.update();

  for (y = 0; y < row; y++) {
    ctx.fillStyle = "#000";
    ctx.fillRect(0, y * grid.h, canvas.width, 0.5);
  }
  for (x = 0; x < column; x++) {
    ctx.fillStyle = "#000";
    ctx.fillRect(x * grid.w, 0, 0.5, canvas.height);
  }
  ctx.fillStyle = "#000";
  ctx.fillRect(canvas.width - 1, 0, 0.5, canvas.height);
  ctx.fillRect(0, canvas.height - 1, canvas.width, 0.5);


  gridBlocks.forEach(block => {
    block.update();
  })
}
animate();

function drawPixel(e) {
  const x = e.touches[0].clientX - canvas.offsetLeft;
  const y = e.touches[0].clientY - canvas.offsetTop;


  gridBlocks.forEach(block => {
    if (x > block.x &&
      x < block.x + block.w &&
      y > block.y &&
      y < block.y + block.h) {
      if (!$("#eraser").checked) {
        block.type = "fill";
        block.col = $("#input").value;
      } else {
        block.type = "fill";
        block.col = "#fff0";
      }
    }
  })
}

$("#input").addEventListener("input", ()=> {
  $("#color").value = $("#input").value;
})
$("#color").addEventListener("change", ()=> {
  $("#input").value = $("#color").value;
})


function generateCode() {
  let data = gridData;
  let colors = [];
  let colorObj = {};

  data.forEach((row, ri) => {
    row.forEach((item, ii) => {
      let index = (row.length * (ri+ 1)) - (row.length - ii);
      if (gridBlocks[index].type == "stroke") {
        data[ri][ii] = "#fff0";
      } else {
        data[ri][ii] = gridBlocks[index].col;
      }
    })
  })

  // a(data);

  gridBlocks.forEach(block => {
    if (block.type == "stroke") {
      if (colors.indexOf("#fff0") == -1) {
        colors.push("#fff0");
      }
    } else {
      if (colors.indexOf(block.col) == -1) {
        colors.push(block.col);
      }
    }
  })

  // a(colors);

  colors.forEach((color, index) => {
    colorObj[color] = index;
  })

  // a(colorObj);
  // a(Object.keys(colorObj))

  data.forEach((row, ri) => {
    row.forEach((color, ii) => {
      let index = (row.length * (ri+ 1)) - (row.length - ii);
      Object.keys(colorObj).forEach(key => {
        if (data[ri][ii] == key) {
          data[ri][ii] = colorObj[key];
        }
      })
    })
  })

  // a(JSON.stringify(data));
  // a(JSON.stringify(colors));

  $("#output").style.left = "0";


  let html =
  `
  let colors = ${JSON.stringify(colors)};
  </br>
  let data = [<br>${JSON.stringify(data).slice(1, -1)}<br>];
  `;
  $("#code").innerHTML = html;

}
$("#btn").addEventListener("click", generateCode);


canvas.addEventListener("touchstart", drawPixel);
canvas.addEventListener("touchmove", drawPixel);

$("#backBtn").addEventListener("click", () => {
  $("#output").style.left = "-100%";
})


$("#copy-btn").addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  textarea.value = $("#code").innerText;
  textarea.style.position = "absolute";
  textarea.style.left = "-200%";
  textarea.style.top = "-200%";
  textarea.readOnly = true;

  document.body.appendChild(textarea);

  textarea.select();
  document.execCommand("copy");

  $("#copy-btn").innerHTML = "Copied";
  setTimeout(() => {
    $("#copy-btn").innerHTML = "Copy";
  }, 800)

})
