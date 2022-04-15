// Order - top > right > bottom > left
const tilesProperty = {
    1: { collide: "bottom-left" },
    2: { collide: "bottom" },
    3: { collide: "bottom" },
    4: { collide: "bottom-right" },
    5: { name: "lava", type: "half", collide: "top" },
    6: { name: "lava", type: "half", collide: "top" },
    7: { collide: "top-bottom-left" },
    8: { collide: "top-right-bottom" },
    16: { name: "lava", type: "full" },
    17: { collide: "all-sides" },
    18: { collide: "top-left" },
    19: { collide: "top-right" },
    27: { collide: "all-sides" },
    28: { collide: "all-sides" },
    29: { collide: "bottom-left" },
    30: { collide: "bottom-right" },
    34: { collide: "top-left" },
    35: { collide: "top" },
    36: { collide: "top" },
    37: { collide: "top-right" },
    41: { collide: "top-right-left" },
    45: { collide: "left" },
    48: { collide: "right" },
    52: { collide: "right-left" }
};

let collisionVal = {
    "top": 1,
    "right": 2,
    "bottom": 3,
    "left": 4,
    "top-right": 5,
    "top-left": 6,
    "bottom-right": 7,
    "bottom-left": 8,
    "all-sides": 9,
    "top-bottom": 10,
    "left-right": 11,
    "top-right-left": 12,
    "right-bottom-left": 13,
    "top-bottom-left": 14,
    "top-right-bottom": 15

}

function getCollisionVal(str) {
    for(val in collisionVal) {
        if(val == str) {
            return collisionVal[val];
        }
    }
}

// console.log(getCollisionVal("top-bottom-left"));
