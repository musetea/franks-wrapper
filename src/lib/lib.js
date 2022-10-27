import { HtmlTagHydration } from 'svelte/internal';



/**
 * 충돌체크 
 * @param {*} rect1 
 * @param {*} rect2 
 * @returns 
 */
export const checkCollision = (rect1, rect2) => {
    return (
        rect1.x < rect2.x + rect2.width && 
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height && 
        rect1.height + rect1.y > rect2.y
    );
};

/**
 * 거리반환 
 * @param {*} x1 
 * @param {*} y1 
 * @param {*} x2 
 * @param {*} y2 
 * @returns 
 */
export const getDistance = (x1, y1, x2, y2) => {
    const dx = x1 - x2;
    const dy = y1 - y2;
    return Math.sqrt(dx*dx + dy*dy);
};

export class BG{
    constructor(w, h){
        this.x1 = 0;
        this.x2 = w;
        this.y = 0;
        this.width = w;
        this.height = h;
    }
};
