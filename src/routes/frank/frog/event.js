import { ARROW_KEYS} from './lib';

export const keys = [];

export const onKeyDown = (e) => {
    keys.splice(0, keys.length);
    keys[e.keyCode] = true;
};

export const onKeyUp = (e) => {
    delete keys[e.keyCode];
};

export const isJump = () => {
    if(keys[ARROW_KEYS.UP] || keys[ARROW_KEYS.DOWN] || keys[ARROW_KEYS.LEFT] || keys[ARROW_KEYS.RIGHT] ){
        return true;
    }
}