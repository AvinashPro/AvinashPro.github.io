const canvas = document.createElement("canvas");
canvas.width = innerWidth;
canvas.height = 220;
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");
let animation;


const images = [
    "img/bg/clouds1.png",
    "img/bg/clouds2.png",
    "img/bg/clouds3.png",
    "img/bg/clouds4.png",
    "img/bg/rocks1.png",
    "img/bg/rocks2.png",
    "img/bg/sky.png"
];
function loadImages() {
    images.forEach((src, index) => {
        const image = new Image();
        image.src = src;
        images[index] = image;
    })
}
loadImages();


class ParallaxBG {
    constructor(layers) {
        this.layers = layers;
    }

    draw() {
        this.layers.forEach((layer) => {
            ctx.drawImage(layer.img, 0, 0, layer.img.width, layer.img.height, layer.pos[0], 0, canvas.width, canvas.height);

            ctx.drawImage(layer.img, 0, 0, layer.img.width, layer.img.height, layer.pos[1], 0, canvas.width, canvas.height);

            layer.pos.forEach((item, lIndex) => {
                layer.pos[lIndex] -= layer.speed;

                if (layer.pos[lIndex] <= -canvas.width) {
                    layer.pos[lIndex] = canvas.width - 1;
                }
            })


        })

    }

    update() {
        this.draw();
    }
}


function main() {
    BGlayers = [
        {
        // sky
        img: images[6],
        speed: 0.1,
        pos: [0, canvas.width]
        },
        {
            // cloud 1
            img: images[0],
            speed: 0.6,
            pos: [0, canvas.width]
        },
        {
            // cloud 2
            img: images[1],
            speed: 0.45,
            pos: [0, canvas.width]
        },
        {
            // rock 1
            img: images[4],
            speed: 0.7,
            pos: [0, canvas.width]
        },
        {
            // cloud 3
            img: images[2],
            speed: 0.8,
            pos: [0, canvas.width]
        },
        {
            // cloud 4
            img: images[3],
            speed: 0.6,
            pos: [0, canvas.width]
        },
        {
            // rock 2
            img: images[5],
            speed: 1,
            pos: [0, canvas.width]
        }
    ];

    bg = new ParallaxBG(BGlayers);

    animate();
}



function animate() {
    animation = requestAnimationFrame(animate);
    ctx.fillStyle = "#f1f5f8";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    bg.update();
}


onload = main;
