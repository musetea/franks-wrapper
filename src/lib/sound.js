export class Sound{
    constructor(src){
        this.sound = document.createElement('audio');
        this.sound.src = src;
    }
    async play(){
        this.sound.play();
    }
}