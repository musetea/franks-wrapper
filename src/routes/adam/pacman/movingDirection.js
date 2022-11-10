const  MovingDirection = {
    up:0,
    down:1,
    left:2,
    right:3
};

export default MovingDirection;


/**
 * KEY의 갯수 반환 
 * @returns 
 */
const getKeyLen = () =>{
    return Object.keys(MovingDirection).length;
};

export const randomMovingDirection = () => {
    const index = Math.floor(Math.random() * getKeyLen());
    return index;
}

