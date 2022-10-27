class Sound{
    constructor(src){
        this.sound = document.createElement('audio');
        this.sound.src = src;
    }
    async play(){
        this.sound.play();
    }
}
export default class Sounds{

    constructor(srcies){
        this.srcies = srcies;
        this.sounds = [];
        for(let i=0; i<this.srcies.length; i++){
            const src = this.srcies[i];
            this.sounds.push(new Sound(src));
        }
    }


    async play(i){
        await this.sounds[i].play();
    }
}