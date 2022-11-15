export const CELL_WIDTH = 40;
export const CELL_HEIGHT = 40;


// '-' :WALL

export const MAP = [
    ['1','-','-','-','-','-','-','-','-','2'],
    ['|',' ',' ',' ',' ',' ',' ',' ',' ','|'],
    ['|',' ','-','-',' ','-','-','-',' ','|'],
    ['|',' ','|',' ',' ',' ',' ','|',' ','|'],
    ['|',' ','|',' ',' ',' ',' ','|',' ','|'],
    ['|',' ','-','-',' ','-','-','-',' ','|'],
    ['|',' ',' ',' ',' ',' ',' ',' ',' ','|'],
    ['|',' ','-','-','-','-','-','-',' ','|'],
    ['|',' ','|',' ',' ',' ',' ','|',' ','|'],
    ['|',' ','-','-','-','-','-','-',' ','|'],
    ['|',' ',' ',' ',' ',' ',' ',' ',' ','|'],
    ['4','-','-','-','-','-','-','-','-','3'],
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

    const {radius, velocity} = player;
    const { x, y} = player.position; 

    return (y - radius + velocity.y <= boundary.position.y + boundary.height &&
        x + radius  + velocity.x >= boundary.position.x &&
        y + radius  + velocity.y >= boundary.position.y &&
        x - radius  + velocity.x <= boundary.position.x + boundary.width)
}