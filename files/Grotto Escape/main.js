const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let homeScreen, gameOverScreen, winScreen;

class ParallaxBackground {
    constructor(layers) {
        this.layers = layers;

        this.dir = "left";
        this.w = canvas.width;
        if (canvas.width < canvas.height) {
            this.h = 300;
        } else {
            this.h = canvas.height;
        }

        this.y = (canvas.height - this.h)/2;
    }

    draw() {
        this.layers.forEach((layer, idx) => {
            if (this.layers[idx].pos == undefined) {
                this.layers[idx].pos = [];


                this.layers[idx].pos[0] = new Vector(0, this.y);
                this.layers[idx].pos[1] = new Vector(this.layers[idx].pos[0].x - this.w, this.y);
                this.layers[idx].pos[2] = new Vector(this.layers[idx].pos[0].x + this.w, this.y);

            }

            ctx.drawImage(layer.img, 0, 0, layer.img.width, layer.img.height, this.layers[idx].pos[0].x, this.layers[idx].pos[0].y, this.w, this.h);
            ctx.drawImage(layer.img, 0, 0, layer.img.width, layer.img.height, this.layers[idx].pos[1].x, this.layers[idx].pos[1].y, this.w, this.h);
            ctx.drawImage(layer.img, 0, 0, layer.img.width, layer.img.height, this.layers[idx].pos[2].x, this.layers[idx].pos[2].y, this.w, this.h);


            if (this.dir == "left") {
                this.layers[idx].pos[0].x -= layer.speed;
                this.layers[idx].pos[1].x -= layer.speed;
                this.layers[idx].pos[2].x -= layer.speed;


                if (this.layers[idx].pos[0].x < - this.w) {
                    this.layers[idx].pos[0].x = 0;
                }
                this.layers[idx].pos[1].x = this.layers[idx].pos[0].x - this.w;
                this.layers[idx].pos[2].x = this.layers[idx].pos[0].x + this.w;

            } else if (this.dir == "right") {
                this.layers[idx].pos[0].x += layer.speed;
                this.layers[idx].pos[1].x += layer.speed;


                if (this.layers[idx].pos[0].x > this.w) {
                    this.layers[idx].pos[0].x = 0;
                }
                this.layers[idx].pos[1].x = this.layers[idx].pos[0].x - this.w;
                this.layers[idx].pos[2].x = this.layers[idx].pos[0].x + this.w;

            }


        })
    }

    update() {
        this.draw();
        this.resize();
    }

    resize() {
        this.w = canvas.width;
        if (canvas.width < canvas.height) {
            this.h = 300;
        } else {
            this.h = canvas.height;
        }

        this.y = (canvas.height - this.h)/2;
        this.layers.forEach((layer, idx) => {
            this.layers[idx].pos[0].y = this.y;
            this.layers[idx].pos[1].y = this.y;
            this.layers[idx].pos[2].y = this.y;
        })
    }
}

class Preloader {

    constructor() {
        this.__assets__ = new Object();
    }

    handleLoadingScreen() {
        let ld_bar = document.getElementById("loadingBar"),
        ld_prt = document.getElementById("loadingPercent"),
        ld_txt = document.getElementById("loadingText"),
        ld_scr = document.getElementById("loadingScreen"),
        start_txt = document.getElementById("start");


        ld_bar.style.width = "100%";
        ld_prt.innerHTML = "100%";
        ld_txt.innerHTML = "Loaded!";
        start_txt.style.display = "block";
        ld_scr.addEventListener("click", () => {
        ld_scr.style.display = "none";
        showHomeScreen();
        //main()
        document.body.requestFullscreen();
        })
    }

    handleFailedToLoadScreen() {
        console.error("Failed! to load resources");
    }

    load(data) {
        if (Object.keys(data).length == 0) {
            this.handleLoadingScreen();
        } else {
            let ld_bar = document.getElementById("loadingBar"),
            ld_prt = document.getElementById("loadingPercent");

            this.__assets__ = data;
            let loads = [],
            noOfLoaded = 0;

            for (let key in data) {
                let {
                    url,
                    type
                } = data[key];

                if (type == "img") {
                    loads.push(this.loadImage(url));
                } else if (type == "audio") {
                    loads.push(this.loadAudio(url));
                } else if (type == "json") {
                    loads.push(this.loadJSON(url));
                }
            }

            loads.forEach((load, idx) => {
                load.then(item => {
                    let key = Object.keys(this.__assets__)[idx];
                    this.__assets__[key].value = item;
                    noOfLoaded++;

                    ld_bar.style.width = noOfLoaded/Object.keys(this.__assets__).length*100+"%";
                    ld_prt.innerHTML = Math.round(noOfLoaded/Object.keys(this.__assets__).length*100)+"%";


                    if (noOfLoaded == Object.keys(this.__assets__).length) {
                        this.handleLoadingScreen();
                        return;
                    }
                }).catch(() => {
                    this.handleFailedToLoadScreen();
                    return;
                })
            })

        }

    }

    loadImage(url) {
        return new Promise((resolve,
            reject) => {
            let img = new Image();
            img.src = url;
            img.onload = () => {
                resolve(img);
            }
            img.onerror = () => {
                reject();
            }
        })
    }

    loadAudio(url) {
        return new Promise((resolve,
            reject) => {
            let audio = new Audio();
            audio.src = url;
            audio.oncanplay = () => {
                resolve(audio);
            }
            audio.onerror = () => {
                reject();
            }
        })
    }

    loadJSON(url) {
        return new Promise((resolve,
            reject) => {
            let request = fetch(url);
            request.then(response => {
                resolve(response.json());
            }).catch(() => {
                reject();
            })
        })
    }

    get(key) {
        return this.__assets__[key].value;
    }


}


function ld_resources() {
    assets = new Preloader();
    assets.load({
        "tileset": {
            url: "assets/img/infinity.png", type: "img"
        },
        "tilemap": {
            url: "assets/json/tilemap1.json", type: "json"
        },
        "player": {
            url: "assets/img/player.png", type: "img"
        },
        "enemies": {
            url: "assets/img/enemies.png", type: "img"
        },
        "items": {
            url: "assets/img/items.png", type: "img"
        },
        "jumpSound": {
            url: "assets/sound/jump.wav", type: "audio"
        },

        "h01": {
            url: "assets/img/homeBg/01.png", type: "img"
        },
        "h02": {
            url: "assets/img/homeBg/02.png", type: "img"
        },
        "h03": {
            url: "assets/img/homeBg/03.png", type: "img"
        },
        "homeMusic": {
            url: "assets/sound/homeBgMusic.mp3", type: "audio"
        },
        "bgMusic": {
            url: "assets/sound/backgroundMusic.mp3", type: "audio"
        }


    });
}
onload = ld_resources;

function showHomeScreen() {
    homeScreen = true;
    assets.get("homeMusic").play();
    assets.get("homeMusic").loop = true;
    
    homeBgData = [{
        img: assets.get("h01"),
        speed: 0.4
    },
        {
            img: assets.get("h02"),
            speed: 0.7
        },
        {
            img: assets.get("h03"),
            speed: 1
        }];

    homeBg = new ParallaxBackground(homeBgData);

    gameLoop("homeBg");
}

document.getElementById("play").addEventListener("click", () => {
    assets.get("homeMusic").pause();
    document.getElementById("homeScreen").style.display = "none";
    homeScreen = false;
    document.getElementById("controller").style.display = "block";
    document.getElementById("fpsCont").style.display = "block";
    cancelAnimationFrame(animID);
    main();
})

document.getElementById("hop").addEventListener("click", () => {
    swal({
        title: "How to play",
        text: "Use WASD or arrow controls for PC and touch controller for mobile.\n\nW => Jump\nA => Left\nD => Right",
        button: "Close"
    });
})

document.getElementById("about").addEventListener("click", () => {
    swal({
        title: "About",
        text: "Heys guys, I'm Avinash, so this is my first fully functional game written purely in JavaScript. It uses HTML5 canvas element for rendering of graphics. I hope you'll like it. Any feedbacks are appreciated.\nThanks!\n\nContact me:\nGithub: https://github.com/AvinashPro\nTelegram: https://t.me/spicoder",
        button: "Close"
    });
})


class Tilemap {
    constructor(tile, data, img, imgProperty) {
        this.tile = tile;
        this.data = data;
        this.img = img;
        this.imgProperty = imgProperty;

        this.collMap = [];
        this.collidableTiles = [1,
            2,
            3,
            4,
            7,
            8,
            16,
            17,
            18,
            19,
            27,
            28,
            29,
            30,
            34,
            35,
            36,
            37,
            38,
            39,
            40,
            41,
            45,
            46,
            47,
            48,
            49,
            50,
            51,
            52];

        this.rowIndex = 0;
        this.columnIndex = 0;
    }

    init() {

        for (let row = 0; row < this.data.length; row++) {

            let array = [];

            for (let column = 0; column < this.data[0].length; column++) {

                let val = this.data[row][column];
                let tVal;

                for (let v in tilesProperty) {
                    if (v == val) {
                        tVal = val;
                    }

                }

                let tile = tilesProperty[tVal];
                if (tVal == undefined || tile.collide == undefined) {
                    array.push(0);
                } else {
                    array.push(getCollisionVal(tile.collide));

                }

            }

            this.collMap.push(array);

        }


    }

    draw() {

        for (let y = 0; y < this.tile.h * this.data.length; y += this.tile.h) {
            for (let x = 0; x < this.tile.w * this.data[0].length; x += this.tile.w) {
                let value = this.data[this.rowIndex][this.columnIndex] - 1;
                let offSet = 0.5;

                let sw = this.img.width / this.imgProperty.column;
                let sh = this.img.height / this.imgProperty.row;
                let sx = Math.floor(value % this.imgProperty.column) * sw;
                let sy = Math.floor(value / this.imgProperty.column) * sh;

                let o = 32;
                if (
                    x > camera.pos.x - canvas.width/2 - o &&
                    x < camera.pos.x + canvas.width/2 + o &&
                    y > camera.pos.y - canvas.height/2 - o &&
                    y < camera.pos.y + canvas.height/2 + o
                ) {
                    ctx.drawImage(this.img, sx, sy, sw, sh, x - offSet / 2, y - offSet / 2, this.tile.w + offSet, this.tile.h + offSet);

                }


                this.columnIndex++;
                if (this.columnIndex == this.data[0].length) {
                    this.rowIndex++;
                    this.columnIndex = 0;
                } if (this.rowIndex == this.data.length) {
                    this.rowIndex = 0;
                }

            }
        }

    }

    update() {
        this.draw();
    }
}

class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(v) {
        return new Vector(this.x + v.x, this.y + v.y);
    }

    sub(v) {
        return new Vector(this.x - v.x, this.y - v.y);
    }

    mult(t) {
        return new Vector(this.x * t, this.y * t);
    }

    lerp(target, val) {
        // console.log;
        // return new Vector(this.x * (1 - val) + target.pos.x * val, this.y * (1 - val) + target.pos.y * val);
        return this.add(target.pos.sub(this).mult(val));
    }

    static dist(v1, v2) {
        return v1.sub(v2).mag();
    }

    mag() {
        return Math.hypot(this.x, this.y);
    }

}


class Camera {
    constructor(x, y) {
        this.pos = new Vector(x, y);
        this.target = null;
        this.val = 1;
        this.offSet = new Vector(0, 0);
    }

    follow(target, offSet = 0) {
        this.target = target;
        this.offSet = offSet;
    }

    update() {
        // console.log(Vector.mag(this.pos, this.target.pos));
        if (this.target) {
            if (Vector.dist(this.pos, this.target.pos) < 1) {
                this.pos = this.target.pos;
            }

            // this.pos.x = canvas.width/2 - this.pos.x
            this.pos = this.pos.lerp(this.target, 0.05);
            this.pos.x = Math.floor(this.pos.x);
            this.pos.y = Math.floor(this.pos.y);
            // console.log(canvas.width/2 - this.pos.x);
            // this.pos = new Vector(this.pos.x, Math.floor(this.pos.y));
            // this.pos.y = ;
            // this.pos = new Vector(canvas.width/2 - Math.floor(this.pos.x), canvas.height/2 - Math.floor(this.pos.y));
            // this.pos = this.target.pos;

            // } else {
            //     this.pos = this.target.pos;
            // }

        }

    }

}


class Sprite {
    constructor(pos, w, h, hitbox, sprite, anim, spriteColumnCount, spriteRowCount) {
        this.pos = pos;
        this.w = w;
        this.h = h;
        this.hitbox = hitbox;
        this.sprite = sprite;
        this.anim = anim;
        this.spriteColumnCount = spriteColumnCount;
        this.spriteRowCount = spriteRowCount;
        this.orientation = 1;
    }

    animation() {
        let frames = this.anim[this.anim.currentState];
        this.anim.currentFrame = frames[this.anim.currentIndex];
        this.anim.currentIndex++;
        if (this.anim.currentIndex >= frames.length) {
            this.anim.currentIndex = 0;
        }

    }

    animationHandler(dt) {
        this.anim.elapsedTime += dt;
        if (this.anim.elapsedTime > this.anim.dur) {
            this.animation();
            this.anim.elapsedTime = 0;
        }
    }

    draw() {
        // ctx.fillStyle = "rgba(0, 136, 255, 0.4)";
        // ctx.fillRect(this.pos.x, this.pos.y, this.w, this.h);

        ctx.save();
        if (this.orientation == 1) ctx.translate(0, 0);
        else if (this.orientation = -1) ctx.translate(this.pos.x * 2 + this.w, 0);
        ctx.scale(this.orientation, 1);
        ctx.drawImage(this.sprite, Math.floor((this.anim.currentFrame - 1) % this.spriteColumnCount) * (this.sprite.width/this.spriteColumnCount), Math.floor((this.anim.currentFrame - 1) / this.spriteColumnCount) * (this.sprite.height/this.spriteRowCount), this.sprite.width/this.spriteColumnCount, this.sprite.height/this.spriteRowCount, this.pos.x, this.pos.y, this.w, this.h);
        ctx.restore();


        //ctx.fillStyle = "rgba(255, 0, 100, 0.7)";
        //ctx.fillRect(this.pos.x + this.hitbox.p1.x, this.pos.y + this.hitbox.p1.y, this.hitbox.p2.x - this.hitbox.p1.x, this.hitbox.p2.y - this.hitbox.p1.y);
    }


}

class Mover extends Sprite {
    constructor(pos, w, h, vel, hitbox, sprite, anim, spriteColumnCount, spriteRowCount) {
        super(pos, w, h, hitbox, sprite, anim, spriteColumnCount, spriteRowCount);
        this.vel = vel;
        this.old = new Vector(0, 0);
    }

    updateOldPos() {
        this.old.x = this.pos.x;
        this.old.y = this.pos.y;
    }

    wallCollision() {
        if (this.pos.x + this.hitbox.p1.x < 0) {
            this.vel.x = 0; this.pos.x = - this.hitbox.p1.x;
        } else if (this.pos.x + this.w > tw * mc) {
            this.vel.x = 0; this.pos.x = tw * mc - this.w;
        }
        if (this.pos.y < 0) {
            this.vel.y = 0; this.pos.y = 0;
        } else if (this.pos.y + this.h > th * mr) {
            this.vel.y = 0; this.pos.y = th * mr - this.h;
        }
    }

    getCurrentTile(tw, th) {
        return {
            minColumn: Math.floor(this.pos.x / tw),
            maxColumn: Math.floor((this.pos.x + this.w) / tw),
            minRow: Math.floor(this.pos.y / th),
            maxRow: Math.floor((this.pos.y + this.h) / th)
        };
    }

    getCurrentTilePos(tw, th) {
        let tile = this.getCurrentTile(tw, th);
        return {
            minX: tile.minColumn * tw,
            maxX: tile.maxColumn * tw,
            minY: tile.minRow * th,
            maxY: tile.maxRow * th
        };
    }

    getCurrentTileVal(tw, th, map) {
        let tile = this.getCurrentTile(tw, th);
        return {
            tl: map[tile.minRow][tile.minColumn],
            tr: map[tile.minRow][tile.maxColumn],
            bl: map[tile.maxRow][tile.minColumn],
            br: map[tile.maxRow][tile.maxColumn]
        };
    }


    collideTop(row, column, th, offSetY = 0) {
        let val = map.data[row][column];
        if (val == 5 || val == 6) offSetY = th/2;

        let top = row * th + offSetY;

        if (this.pos.y + this.hitbox.p2.y > top && this.old.y + this.hitbox.p2.y <= top) {
            if (val == 5 || val == 6) {
                if (this.__proto__.constructor.name == "Player") {
                    Game_Over = true;
                }
            } else {

                (val == 27) ? this.jumpForce = 7.5: this.jumpForce = 5.2;

                this.vel.y = 0;
                this.pos.y = this.old.y = top - this.hitbox.p2.y - 0.01;
                this.bottom = true;
            }
            return true;
        } return false;

    }

    collideBottom(row, th, offSetY = 0) {
        let bottom = row * th + th + offSetY;

        if (this.pos.y + this.hitbox.p1.y < bottom && this.old.y + this.hitbox.p1.y >= bottom) {
            this.vel.y = 0;
            this.pos.y = bottom - this.hitbox.p1.y + 0.01;
            return true;
        } return false;

    }

    collideLeft(column, tw, row) {
        let left = column * tw;
        let top = row * map.tile.h;

        if (this.pos.x + this.hitbox.p2.x > left && this.old.x + this.hitbox.p2.x <= left && this.pos.y + this.hitbox.p2.y > top) {
            this.vel.x = 0;
            this.pos.x = left - this.hitbox.p2.x - 0.01;
            return true;
        } return false;

    }

    collideRight(column, tw) {
        let right = column * tw + tw;

        if (this.pos.x + this.hitbox.p1.x < right && this.old.x + this.hitbox.p1.x >= right) {
            this.vel.x = 0;
            this.pos.x = right - this.hitbox.p1.x + 0.01;
            return true;
        } return false;

    }

    1(column, row, tw, th) {
        let value = map.data[row][column];

        // LAVA COLLISION
        // if(value == 5 || value == 6) {
        //     let offSetY = th/2;
        //     let top = row * th + offSetY;
        //     if(this.pos.y + this.hitbox.p2.y > top && this.old.y + this.hitbox.p2.y <= top) {
        //         // console.log("lava");
        //         Game_Over = true;
        //     }
        // }
        // else {
        this.collideTop(row, column, th);
        // }
    }

    2(column, row, tw, th) {
        this.collideRight(column, tw);
    }

    3(column, row, tw, th) {
        this.collideBottom(row, th);
    }

    4(column, row, tw, th) {
        this.collideLeft(column, tw, row);
    }

    5(column, row, tw, th) {
        if (this.collideTop(row, column, th)) return;
        this.collideRight(column, tw);
    }

    6(column, row, tw, th) {
        if (this.collideTop(row, column, th)) return;
        this.collideLeft(column, tw, row);
    }

    7(column, row, tw, th) {
        if (this.collideBottom(row, th)) return;
        this.collideRight(column, tw);
    }

    8(column, row, tw, th) {
        if (this.collideBottom(row, th)) return;
        this.collideLeft(column, tw, row);
    }

    9(column, row, tw, th) {
        if (this.collideTop(row, column, th)) return;
        if (this.collideLeft(column, tw, row)) return;
        if (this.collideRight(column, tw)) return;
        this.collideBottom(row, th);

    }

    10(column, row, tw, th) {
        if (this.collideTop(row, column, th)) return;
        this.collideBottom(row, th);
    }

    11(column, row, tw, th) {
        if (this.collideLeft(column, tw, row)) return;
        this.collideRight(column, tw);
    }

    12(column, row, tw, th) {
        if (this.collideTop(row, column, th)) return;
        if (this.collideLeft(column, tw, row)) return;
        this.collideRight(column, tw);
    }

    13(column, row, tw, th) {
        if (this.collideLeft(column, tw, row)) return;
        if (this.collideRight(column, tw)) return;
        this.collideBottom(row, th);
    }

    14(column, row, tw, th) {
        if (this.collideTop(row, column, th)) return;
        if (this.collideLeft(column, tw, row)) return;
        this.collideBottom(row, th);
    }

    15(column, row, tw, th) {
        if (this.collideTop(row, column, th)) return;
        if (this.collideRight(column, tw)) return;
        this.collideBottom(row, th);
    }


    handleCollision(tw, th, map) {
        let column,
        row,
        value;

        let p1x = this.hitbox.p1.x,
        p1y = this.hitbox.p1.y,
        p2x = this.hitbox.p2.x,
        p2y = this.hitbox.p2.y,
        hitboxW = p2x - p1x,
        hitboxH = p2y - p1y;

        // TEST TOP
        column = Math.floor((this.pos.x + p1x) / tw);
        row = Math.floor((this.pos.y + p1y) / th);
        // console.log(row);
        if (row != undefined) value = map[row][column];
        else value = undefined;

        if (value != 0 && value != undefined) this[value](column, row, tw, th);

        column = Math.floor((this.pos.x + p1x + hitboxW) / tw);
        if (row != undefined) value = map[row][column];
        else value = undefined;

        if (value != 0 && value != undefined) this[value](column, row, tw, th);

        // TEST BOTTOM
        column = Math.floor((this.pos.x + p1x) / tw);
        row = Math.floor((this.pos.y + p1y + hitboxH) / th);
        if (row != undefined) value = map[row][column];
        else value = undefined;
        // console.log(value);
        if (value != 0 && value != undefined) this[value](column, row, tw, th);

        column = Math.floor((this.pos.x + p1x + hitboxW) / tw);
        if (row != undefined) value = map[row][column];
        else value = undefined;

        if (value != 0 && value != undefined) this[value](column, row, tw, th);


        // TEST LEFT
        column = Math.floor((this.pos.x + p1x) / tw);
        row = Math.floor((this.pos.y + p1y)/ th);
        if (row != undefined) value = map[row][column];
        else value = undefined;

        if (value != 0 && value != undefined) this[value](column, row, tw, th);

        row = Math.floor((this.pos.y + p1y + hitboxH) / th);
        if (row != undefined) value = map[row][column];
        else value = undefined;

        if (value != 0 && value != undefined) this[value](column, row, tw, th);



        // TEST RIGHT
        column = Math.floor((this.pos.x + p1x + hitboxW) / tw);
        row = Math.floor((this.pos.y + p1y)/ th);
        if (row != undefined) value = map[row][column];
        else value = undefined;

        if (value != 0 && value != undefined) this[value](column, row, tw, th);

        row = Math.floor((this.pos.y + p1y + hitboxH) / th);
        if (row != undefined) value = map[row][column];
        else value = undefined;

        if (value != 0 && value != undefined) this[value](column, row, tw, th);










    }




}


class Player extends Mover {
    constructor(pos, w, h, vel, hitbox, sprite, anim, spriteColumnCount, spriteRowCount) {
        super(pos, w, h, vel, hitbox, sprite, anim, spriteColumnCount, spriteRowCount);

        this.speed = 3;
        this.g = 0.2;
        this.friction = 0.1;
        this.jumpForce = 5.2;
        this.controls = {
            left: false,
            right: false,
            jump: false
        };
        this.bottom = false;
        this.falling = false;

    }

    stateHandler(dt) {

        // change Orientation
        if (this.controls.left) this.orientation = -1;
        else if (this.controls.right) this.orientation = 1;

        // change State
        if (!this.bottom || this.falling) {
            this.anim.currentIndex = 0;
            this.anim.currentState = "jump";
            this.animation();
        } else if (!this.controls.left && !this.controls.right && this.bottom && !this.falling) {
            this.anim.currentIndex = 0;
            this.anim.currentState = "idle";
            this.animation();
        } else if ((this.controls.left || this.controls.right) && this.bottom && !this.falling && this.anim.currentState != "run") {
            this.anim.currentIndex = 0;
            this.anim.currentState = "run";
            this.animation();
        }
    }

    movement() {
        if (this.controls.left) this.vel.x = - this.speed;
        else if (this.controls.right) this.vel.x = this.speed;
        // else this.vel.x = 0;

        if (this.controls.jump && this.bottom) {
            this.vel.y = - this.jumpForce;
            try {
                assets.get("jumpSound").play();
            } catch {}
            // console.log(this.vel);
            this.bottom = false;
        }
    }

    update(dt) {
        this.stateHandler(dt);
        // console.log(this.anim.currentState);
        this.animationHandler(dt);
        this.movement();
        this.updateOldPos();
        this.wallCollision();

        this.vel.y += this.g;
        this.vel.x *= 1 - this.friction;
        this.pos = this.pos.add(this.vel.mult(dt/10));

        if (this.vel.y > this.g) this.falling = true;
        else this.falling = false;
        // console.log(this.falling, this.vel.y.toFixed(2), this.g);

        this.handleCollision(tw, th, collisionMap);

        this.draw();



    }


}

class Enemy extends Mover {

    constructor(pos, w, h, vel, hitbox, sprite, anim, spriteColumnCount, spriteRowCount) {
        super(pos, w, h, vel, hitbox, sprite, anim, spriteColumnCount, spriteRowCount);
        this.g = 0.2;
        this.falling = false;
    }



    update(dt) {
        this.stateHandler(dt);
        this.animationHandler(dt);
        this.updateOldPos();
        this.wallCollision();
        this.vel.y += this.g;
        this.pos = this.pos.add(this.vel);

        if (this.vel.y > this.g) this.falling = true;
        else this.falling = false;

        this.handleCollision(tw, th, collisionMap);
        this.draw();


        if (this.startPoint != undefined && this.endPoint != undefined) {
            if (this.pos.x + this.hitbox.p1.x <= this.startPoint) this.vel.x = this.speed;
            else if (this.pos.x + this.hitbox.p2.x >= this.endPoint) this.vel.x = - this.speed;
        }
    }
}

class Slime extends Enemy {
    constructor(pos, w, h, vel, hitbox, sprite, anim, spriteColumnCount, spriteRowCount, startPoint, endPoint, speed) {
        super(pos, w, h, vel, hitbox, sprite, anim, spriteColumnCount, spriteRowCount);
        this.startPoint = startPoint;
        this.endPoint = endPoint;
        this.speed = speed;

    }

    stateHandler() {
        if (this.vel.x > 0) this.orientation = 1;
        else if (this.vel.x < 0) this.orientation = -1;

        if (this.vel.x == 0 && this.bottom && !this.falling) {
            this.anim.currentIndex = 0;
            this.anim.currentState = "idle";
            this.animation();
        } else if ((this.vel.x > 0 || this.vel.x < 0) && this.bottom && !this.falling && this.anim.currentState != "run") {
            this.anim.currentIndex = 0;
            this.anim.currentState = "run";
            this.animation();
        }
    }

}

class Bat extends Enemy {
    constructor(pos, w, h, vel, hitbox, sprite, anim, spriteColumnCount, spriteRowCount, startPoint, endPoint, speed) {
        super(pos, w, h, vel, hitbox, sprite, anim, spriteColumnCount, spriteRowCount);
        this.startPoint = startPoint;
        this.endPoint = endPoint;
        this.speed = speed;
        this.g = 0;

    }

    stateHandler() {
        if (this.vel.x > 0) this.orientation = 1;
        else if (this.vel.x < 0) this.orientation = -1;

        if (this.vel.x == 0) {
            this.anim.currentIndex = 0;
            this.anim.currentState = "idle";
            this.animation();
        } else if (this.vel.x != 0 && this.anim.currentState != "run") {
            this.anim.currentIndex = 0;
            this.anim.currentState = "run";
            this.animation();
        }
    }

}

class Dragon extends Enemy {
    constructor(pos, w, h, vel, hitbox, sprite, anim, spriteColumnCount, spriteRowCount) {
        super(pos, w, h, vel, hitbox, sprite, anim, spriteColumnCount, spriteRowCount);
        this.timeToNextFireball = 3500;
        this.timer = this.timeToNextFireball;
    }

    stateHandler(dt) {
        // Change Orientation
        if (player.pos.x + player.hitbox.p2.x < this.pos.x + this.hitbox.p1.x) this.orientation = -1;
        else this.orientation = 1;
        this.anim.currentState = "idle";

        this.createFireball(dt);
    }


    createFireball(dt) {
        // console.log(dt);
        this.timer += dt;
        if (this.timer > this.timeToNextFireball) {
            this.anim.currentState = "firing";
            this.anim.currentIndex = 0;
            this.animation();

            createFireball(this.pos.x + this.hitbox.p1.x, this.pos.y, this.orientation);

            this.timer = 0;
        }
    }
}

class Fireball extends Sprite {
    constructor(pos, w, h, hitbox, sprite, anim, spriteColumnCount, spriteRowCount, orientation) {
        super(pos, w, h, hitbox, sprite, anim, spriteColumnCount, spriteRowCount);
        this.orientation = orientation;
        this.speed = 3.5;
        this.old = new Vector(0, 0);
        this.vel = new Vector(0, 0);
        this.tileCollided = false;
    }

    tileCollision(tw, th, map) {
        if (this.vel.x < 0) {
            let column = Math.floor((this.pos.x+this.hitbox.p1.x)/tw);
            let row = Math.floor((this.pos.y+this.hitbox.p1.y)/th);
            let val = map[row][column];

            if (val != 0) {
                let right = (column+1) * tw;
                if (this.pos.x+this.hitbox.p1.x < right && this.old.x+this.hitbox.p1.x >= right) {
                    this.tileCollided = true;
                    this.pos.x = right - this.hitbox.p1.x + 0.001;
                    this.vel.x = 0;
                }
            }
        } else if (this.vel.x > 0) {
            let column = Math.floor((this.pos.x+this.hitbox.p2.x)/tw);
            let row = Math.floor((this.pos.y+this.hitbox.p1.y)/th);
            let val = map[row][column];

            if (val != 0) {
                let left = column * tw;
                if (this.pos.x+this.hitbox.p2.x > left && this.old.x+this.hitbox.p2.x <= left) {
                    this.tileCollided = true;
                    this.pos.x = left - this.hitbox.p2.x - 0.01;
                    this.vel.x = 0;
                }
            }
        }
    }

    stateHandler() {
        if (this.tileCollided) {
            this.anim.currentState = "blast";
            this.currentIndex = 0;
            this.animation();
        } else this.anim.currentState = "fire";
    }


    update(dt) {

        this.old = this.pos;
        this.pos = this.pos.add(this.vel);
        this.tileCollision(map.tile.w, map.tile.h, map.collMap);

        if (this.orientation == 1) this.vel.x = this.speed;
        else if (this.orientation == -1) this.vel.x = - this.speed;

        this.stateHandler();
        this.animationHandler(dt);
        this.draw();
    }

}







const rand = (min, max) => Math.random() * (max - min) + min;

function createFireball(x, y, orientation) {
    fireballs.push(new Fireball(new Vector(x, y), 32, 32, {
        p1: new Vector(10, 14), p2: new Vector(24, 22)
    }, assets.get("items"), {
        fire: [9, 10, 11, 10],
        blast: [12],
        dur: 150,
        elapsedTime: 0,
        currentState: "fire",
        currentFrame: 9,
        currentIndex: 0
    }, 4, 4, orientation));
}

function createDragon(x, y) {
    return new Dragon(new Vector(x, y), 32, 32, new Vector(0, 0), {
        p1: new Vector(6, 8), p2: new Vector(28, 32)
    }, assets.get("enemies"), {
        idle: [5, 6, 7, 6],
        firing: [8],
        dur: 200,
        elapsedTime: 0,
        currentState: "idle",
        currentFrame: 5,
        currentIndex: 0
    }, 4, 3);
}

function createSlime(startPoint, endPoint, y, speed) {
    let vx;
    Math.random() < 0.5 ? vx = speed: vx = - speed;
    return new Slime(new Vector(rand(startPoint, endPoint), y), 32, 32, new Vector(vx, 0), {
        p1: new Vector(6, 8), p2: new Vector(28, 32)
    }, assets.get("enemies"), {
        idle: [1],
        run: [2, 3, 2, 1],
        dur: 300,
        elapsedTime: 0,
        currentState: "idle",
        currentFrame: 1,
        currentIndex: 0
    }, 4, 3, startPoint, endPoint, speed);
}


function createBat(startPoint, endPoint, y, speed, x) {
    let vx;
    if (x == undefined) x = rand(startPoint, endPoint);
    Math.random() < 0.5 ? vx = speed: vx = - speed;
    return new Bat(new Vector(x, y), 32, 32, new Vector(vx, 0), {
        p1: new Vector(10, 10), p2: new Vector(26, 26)
    }, assets.get("enemies"), {
        idle: [9],
        run: [9, 10, 11, 10],
        dur: 300,
        elapsedTime: 0,
        currentState: "idle",
        currentFrame: 1,
        currentIndex: 0
    }, 4, 3, startPoint, endPoint, speed);
}


function checkAABBCollision(a, b) {
    if (a.pos.x + a.hitbox.p2.x > b.pos.x + b.hitbox.p1.x && a.pos.x + a.hitbox.p1.x < b.pos.x + b.hitbox.p2.x && a.pos.y + a.hitbox.p2.y > b.pos.y + b.hitbox.p1.y && a.pos.y + a.hitbox.p1.y < b.pos.y + b.hitbox.p2.y) return true;
    return false;
}


function main() {
    // console.log(assets.resources);
    // console.log("Executed main function!");
    assets.get("bgMusic").play();
    assets.get("bgMusic").loop = true;
    
    Game_Over = false;
    camera = new Camera(0, 900);

    map = new Tilemap({
        w: 32, h: 32
    }, assets.get("tilemap").data, assets.get("tileset"), {
        row: 5, column: 11
    });
    map.init();

    tw = map.tile.w,
    th = map.tile.h,
    mc = map.data[0].length,
    mr = map.data.length,
    collisionMap = map.collMap;


    player = new Player(new Vector(128, 1120), 32, 32, new Vector(0, 0), {
        p1: new Vector(8, 7), p2: new Vector(26, 32)}, assets.get("player"), {
        idle: [6],
        run: [1, 2, 3, 2],
        jump: [5],
        dur: 200,
        elapsedTime: 0,
        currentState: "idle",
        currentFrame: 6,
        currentIndex: 0
    }, 4, 2);

    fireballs = [];
    enemiesArray = [];
    enemiesArray.push(
        createSlime(352+0.01, 640-0.01, 1300, 1),
        createSlime(192+0.01, 416-0.01, 640, 1),
        createSlime(224+0.01, 1152-0.01, 64-0.01, 2, 224+0.01),
        createSlime(224+0.01, 1152-0.01, 64-0.01, 2, 1152-0.01),

        createBat(26*32+0.01, 37*32-0.01, 1376, 2),
        createBat(24*32+0.01, 36*32-0.01, 704, 1.5, 24*32+0.01),
        createBat(24*32+0.01, 36*32-0.01, 704, 1.5, 36*32-0.01),
        createBat(0.01, 7*32-0.01, 7*32, 1.5, 0.01),
        createBat(0.01, 9*32-0.01, 11*32, 1.5, 9*32-0.01),

        createDragon(1248 + 0.01, 1056 - 0.01),
        createDragon(1284 + 0.01, 1344 - 0.01),
        createDragon(1152 + 0.01, 64 - 0.01)
    );

    win = {
        x: 48 * map.tile.w,
        y: 0 * map.tile.h,
        w: map.tile.w * 2,
        h: map.tile.h
    };
    // map.draw()
    // console.log(map);

    gameLoop();
}



function Game_Over_Screen(won = false) {
    document.getElementById("gameOverScreen").style.pointerEvents = "all";
    document.getElementById("gameOverScreen").style.display = "grid";
    if (won) {
        document.getElementById("got").innerHTML = "You won!";
        document.getElementById("restart").innerHTML = "Play again";
    } else {
        document.getElementById("got").innerHTML = "Game Over!";
        document.getElementById("restart").innerHTML = "Resart";
    }

}

function Game_Over_Handler(won = false) {
    cancelAnimationFrame(animID);
    assets.get("bgMusic").pause();
    document.getElementById("controller").style.display = "none";
    if (won) {
        document.getElementById("gameOverScreen").classList.add("wonScreen");
        document.getElementById("gameOverScreen").classList.remove("gameOverScreen");
    } else {
        document.getElementById("gameOverScreen").classList.remove("wonScreen");
        document.getElementById("gameOverScreen").classList.add("gameOverScreen");
    }
    Game_Over_Screen(won);
}

document.getElementById("restart").addEventListener("click", () => {
    document.getElementById("gameOverScreen").style.display = "none";
    document.getElementById("gameOverScreen").style.pointerEvents = "none";
    document.getElementById("controller").style.display = "block";
    main();

});






let animID, then = performance.now(), now, dt, devMode = false, j;
function gameLoop() {

    // CALCULATING DELTATIME
    now = performance.now();
    dt = now - then;
    document.getElementById("fps").innerHTML = Math.floor(1000/dt);
    then = now;


    animID = requestAnimationFrame(gameLoop);


    // CLEARING PREVIOUS RENDERING
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.imageSmoothingEnabled = false;

    if (homeScreen) {
        homeBg.update();
    } else {
        //player.bottom = true;
        if (devMode) {
            Game_Over = false;
            if (j) {
                player.bottom = true;
            }
        }

        if (Game_Over) {
            Game_Over_Handler();
        }

        if (
            player.pos.x + player.hitbox.p2.x > win.x &&
            player.pos.x + player.hitbox.p1.x < win.x + win.w &&
            player.pos.y + player.hitbox.p2.y > win.y &&
            player.pos.y + player.hitbox.p1.y < win.y + win.h

        ) {
            Game_Over_Handler(true);
        }





        // console.log(`No. of fireballs: ${fireballs.length}`);
        // SETS TARGET TO THE CAMERA
        camera.follow(player, new Vector(canvas.width/2, canvas.height/2));

        // DRAW AND UPDATE FUNCTIONS OF ALL ENTITIES
        ctx.save();
        ctx.translate(camera.offSet.x - camera.pos.x, camera.offSet.y - camera.pos.y);
        // ctx.scale(1.2, 1);
        map.update();
        fireballs.forEach((fireball, idx) => {
            if (fireball.tileCollided) {
                fireballs.splice(idx, 1);
            }
            fireball.update(dt);
            if (checkAABBCollision(player, fireball)) Game_Over = true;
        })
        enemiesArray.forEach(en => {
            en.update(dt);
            if (checkAABBCollision(player, en)) Game_Over = true;
        })
        player.update(dt);
        ctx.restore();

        // UPDATING THE POSITION OF CAMERA
        camera.update(player);


    }
}





function resizeGameScreen(e) {
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    //homeBg.resize();

    /*bg.w = canvas.width;
    bg.h = canvas.height;
    bg.y = (canvas.height - bg.h)/2;
    bg.layers.forEach((layer, idx) => {
    bg.layers[idx].pos[0].y = bg.y;
    bg.layers[idx].pos[1].y = bg.y;
    bg.layers[idx].pos[2].y = bg.y;
        })*/
}


addEventListener("resize", resizeGameScreen);


addEventListener("keydown", e => {
    let key = e.keyCode;
    let k = e.key;
    if (key == 37 || key == 65) player.controls.left = true;
    else if (key == 39 || key == 68) player.controls.right = true;
    if (key == 38 || key == 87) player.controls.jump = true;

    if (k == "p") {
        if (devMode) {
            devMode = false;
        } else devMode = true;
    }
    if (k == "j") {
        if (j) {
            j = false;
        } else j = true;
    }

});
addEventListener("keyup", e => {
    let key = e.keyCode;
    if (key == 37 || key == 65) player.controls.left = false;
    else if (key == 39 || key == 68) player.controls.right = false;
    if (key == 38 || key == 87) player.controls.jump = false;

});


document.getElementById("left-btn").addEventListener("touchstart", () => {
    player.controls.left = true;
})
document.getElementById("left-btn").addEventListener("touchend", () => {
    player.controls.left = false;
})
document.getElementById("right-btn").addEventListener("touchstart", () => {
    player.controls.right = true;
})
document.getElementById("right-btn").addEventListener("touchend", () => {
    player.controls.right = false;
})
document.getElementById("jump-btn").addEventListener("touchstart", () => {
    player.controls.jump = true;
})
document.getElementById("jump-btn").addEventListener("touchend", () => {
    player.controls.jump = false;
})
