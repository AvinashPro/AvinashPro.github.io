const canvas = document.createElement("canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

let score = 0;


const random = {
    rand: (min, max) => Math.random() * (max - min) + min,
    randint: (min, max) => Math.round(Math.random() * (max - min) + min)
};

const toRadians = d => -Math.PI/180*d;
const toDegrees = r => Math.ceil(-180/Math.PI*r);


class Vector {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(vec) {
        return new Vector(this.x + vec.x, this.y + vec.y);
    }

    sub(vec) {
        return new Vector(this.x - vec.x, this.y - vec.y);
    }

    mult(num) {
        return new Vector(this.x * num, this.y * num);
    }

    static dist(v1, v2) {
        return Math.hypot(v1.x - v2.x, v1.y - v2.y);
    }

    static angle(v1, v2) {
        return Math.atan2(v1.y - v2.y, v1.x - v2.x);
    }


}

class Sprite {
    constructor(x, y, r, col) {
        this.pos = new Vector(x, y);
        this.r = r;
        this.col = col;
        this.vel = new Vector(0, 0);
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.col;
        ctx.arc(this.pos.x, this.pos.y, this.r, 0, Math.PI*2, false);
        ctx.fill();
    }

    update() {
        this.draw();
        this.pos = this.pos.add(this.vel);

    }

}

class Player extends Sprite {
    constructor(x, y, r, col) {
        super(x, y, r, col);
    }
}

class Projectile extends Sprite {
    constructor(x, y, r, col, vel) {
        super(x, y, r, col);
        this.vel = vel;
    }

    update() {
        this.draw();
        this.pos = this.pos.add(this.vel);
        this.vel = this.vel.mult(1.01);
        this.r *= 0.99;
    }

    wallCollision() {
        if (this.pos.x < -this.r*2 || this.pos.x > canvas.width + this.r*2 || this.pos.y < -this.r*2 || this.pos.y > canvas.height + this.r*2) {
            return true;
        }
        return false;

    }

}

class Enemy extends Sprite {
    constructor(x, y, r, col, vel) {
        super(x, y, r, col);
        this.vel = vel;
        this.collided = false;
        this.idx = 0;
    }

    update() {
        if (this.r <= 0) {
            enemies.splice(this.idx, 1);
            this.collided = false;
        } else {
            this.draw();
        }


        if (this.collided) this.shrink();
        this.pos = this.pos.add(this.vel);

    }

    shrink() {
        this.r -= 0.5;
    }
}

class Particle {
    constructor(x, y, r, col, vel) {
        this.pos = new Vector(x, y);
        this.r = r;
        this.col = col;
        this.vel = vel;
        this.alpha = 1;
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.fillStyle = this.col;
        ctx.arc(this.pos.x, this.pos.y, this.r, 0, Math.PI*2, false);
        ctx.fill();
        ctx.restore();
    }

    update() {
        this.draw();
        this.pos = this.pos.add(this.vel);
        this.alpha -= 0.01;
        this.vel = this.vel.mult(1.01);
    }
}



function main() {
    projectiles = [];
    enemies = [];
    particles = [];

    player = new Player(canvas.width/2, canvas.height/2, 15, "#08f");

    GameLoop();
    setInterval(generateEnemy, 1000);
    addEventListener("touchstart", generateProjectile);

    // only for experiments/fun
    // addEventListener("touchmove", generateProjectile);
}
main();



// GAME_LOOP FUNCTION
function GameLoop() {
    loop = requestAnimationFrame(GameLoop);

    ctx.fillStyle = "rgba(20,28,30,.2)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Projectiles/Bullets
    projectiles.forEach((projectile, pi) => {
        projectile.update();

        if (projectile.wallCollision()) {
            projectiles.splice(pi, 1);
        }

        // enemy-projectile collision
        enemies.forEach((enemy, ei) => {
            if (checkcirclesCollision(projectile, enemy)) {
                projectiles.splice(pi, 1);
                enemy.idx = ei;
                enemy.collided = true;

                for (i = 0; i < 40; i++) {
                    generateParticle(enemy);
                }

                score += 10;

            }
        })
    })

    // Enemies
    enemies.forEach(enemy => {
        enemy.update();

        // player-enemy collision
        if (checkcirclesCollision(player, enemy) && enemy.r > 0) {
            cancelAnimationFrame(loop);
        }
    })

    // Particle Effect
    particles.forEach((particle, pi) => {
        particle.update();

        if (particle.alpha <= 0) {
            particles.splice(pi, 1);
        }
    })



    // update player
    player.update();
    // player.pos = player.pos.add(new Vector(random.rand(-2, 2), random.rand(-2, 2)));



    // DEV MODE
    document.querySelector("#dev").innerHTML = `No. of Particles: ${particles.length}<br>No. of Projectiles: ${projectiles.length}<br>No. of enemies: ${enemies.length}`;

    // SCORE
    document.querySelector("#score").innerHTML = `Score - ${score}`;

}
// END OF GAME_LOOP :)

function generateParticle(entity) {
    let angle = random.rand(0,
        360);
    let speed = random.rand(1.5,
        3);
    let vel = new Vector(Math.cos(angle),
        Math.sin(angle)).mult(speed);

    let particle = new Particle(entity.pos.x,
        entity.pos.y,
        random.rand(0.5, 1),
        entity.col,
        vel);

    particles.push(particle);
}



function checkcirclesCollision(c1, c2) {
    if (Vector.dist(c1.pos, c2.pos) < c1.r+c2.r) {
        return true;
    }
    return false;
}


function generateEnemy() {
    let r = random.rand(8, 15);
    let x,
    y;

    if (random.rand(0, 1) < 0.5) {
        random.rand(0, 1) < 0.5 ? x = -r*2: x = canvas.width + r*2;
        y = random.rand(0, canvas.height);
    } else {
        random.rand(0, 1) < 0.5 ? y = -r*2: y = canvas.height + r*2;
        x = random.rand(0, canvas.width);
    }


    let pos = new Vector(x, y),
    col = `hsl(${random.randint(0, 360)}, 100%, 50%)`,
    angle = Vector.angle(player.pos, pos),
    speed = 1.5,
    vel = new Vector(Math.cos(angle), Math.sin(angle)).mult(speed),
    enemy = new Enemy(pos.x, pos.y, r, col, vel);
    console.log(pos.x, pos.y)
    enemies.push(enemy);
}




function generateProjectile(e) {
    const pos = new Vector(e.touches[0].clientX, e.touches[0].clientY);

    let angle = Vector.angle(pos, player.pos),
    speed = 2.5,
    vel = new Vector(Math.cos(angle), Math.sin(angle)).mult(speed),

    projectile = new Projectile(player.pos.x, player.pos.y, 2, "#fff", vel);

    projectiles.push(projectile);

}




onresize = () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    player.pos = new Vector(canvas.width/2, canvas.height/2);
}
