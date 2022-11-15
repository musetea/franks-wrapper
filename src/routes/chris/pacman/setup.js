export const CELL_WIDTH = 40;
export const CELL_HEIGHT = 40;


// '-' :WALL

export const MAP = [
    ['1','-','-','-','-','-','-','-','-','-','2'],
    ['|',' ','.','.','.','.','.','.','.','.','|'],
    ['|','.','b','.','b',' ','b',' ','b','.','|'],
    ['|','.','.','.','.','b','.','.','b','.','|'],
    ['|','.','b','.','.','.','.','b','.','.','|'],
    ['|','.','.','.','.','b','.','.','b','.','|'],
    ['|','.','b','.','b',' ','b','.','b','.','|'],
    ['|','.','.','.','.','b','.','.','.','.','|'],
    ['|','.','b',']','.','.','g','.','.','.','|'],
    ['|','.','.','.','.','b','.','.','b','.','|'],
    ['|','.','b','.','b','.','b','.','b','p','|'],
    ['|','.','.','.','.','.','.','.','.','g','|'],
    ['4','-','-','-','-','-','-','-','-','-','3']
];

export const KEYS = {
    UP: 'w',
    DOWN: 's',
    LEFT: 'a',
    RIGHT: 'd'
};

export const Keys = {
    w:{
        pressed: false
    },
    a:{
        pressed: false
    },
    s:{
        pressed: false
    },
    d:{
        pressed: false
    },
};


export const SPEED = 5;

export const collisionWith = (player, boundary) => {
    const padding = CELL_WIDTH/2 - player.radius -1;

    const {radius, velocity} = player;
    const { x, y} = player.position; 

    return (y - radius + velocity.y <= boundary.position.y + boundary.height + padding &&
        x + radius  + velocity.x >= boundary.position.x - padding &&
        y + radius  + velocity.y >= boundary.position.y - padding &&
        x - radius  + velocity.x <= boundary.position.x + boundary.width + padding)
};

export const BoundaryImages = {
    "-" :   '/chris/pacman/pipeHorizontal.png',
    "|" :   '/chris/pacman/pipeVertical.png',
    "1" :   '/chris/pacman/pipeCorner1.png',
    "2" :   '/chris/pacman/pipeCorner2.png',
    "3" :   '/chris/pacman/pipeCorner3.png',
    "4" :   '/chris/pacman/pipeCorner4.png',
    "b" :   '/chris/pacman/block.png',
    "[" :   '/chris/pacman/capLeft.png',
    "]" :   '/chris/pacman/capRight.png',
    "_" :   '/chris/pacman/capBottom.png',
    "^" :   '/chris/pacman/capTop.png',
    "+" :   '/chris/pacman/pipeCross.png',
    "5" :   '/chris/pacman/pipeConnectorTop.png',
    "6" :   '/chris/pacman/pipeConnectorRight.png',
    "7" :   '/chris/pacman/pipeConnectorBottom.png',
    "8" :   '/chris/pacman/pipeConnectorLeft.png'
};

export const circleCollidesWithRectangle = (circle, rectangle) => {
    const padding  = CELL_WIDTH/2 - circle.radius-1;
    return (
        circle.position.y - circle.radius + circle.velocity.y <= rectangle.position.y + rectangle.height + padding &&
        circle.position.x + circle.radius + circle.velocity.x >= rectangle.position.x - padding &&
        circle.position.y + circle.radius + circle.velocity.y >= rectangle.position.y - padding &&
        circle.position.x - circle.radius + circle.velocity.x <= rectangle.position.x + rectangle.width + padding
    )
};
