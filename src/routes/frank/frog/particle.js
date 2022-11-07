import { isPressKey, MAX_PARTICLES } from './lib';

const randomdir = Math.random() * 1 - 0.5;
const particles = [];

class Particle{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 20 + 1;
        this.opacity = 1;
        this.direction = {
            x: randomdir,
            y: randomdir
        }
    };

    /**
     * CONTEXT 3
     * @param {*} context 
     */
    draw(context){
        //console.log(context);
        context.fillStyle = 'rgba(150,150,150,1)';
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
        context.closePath();
    };

    update(context){
        this.x += this.direction.x;
        this.y += this.direction.y;
        this.draw(context)
    }
};

export const handleParticles = (context, x, y ) => {
    if(!context) return;
    

    //console.log(frog.x, frog.y);
    particles.forEach(particle => {
        particle.update(context)
    });

    if(particles.length > MAX_PARTICLES){
        for(let i=0; i<30; i++)
        {
            particles.pop();
        }
    }

    if( isPressKey() && y > 100 && particles.length < MAX_PARTICLES){
        for(let i=0; i<10; i++){
            particles.unshift(new Particle(x, y));
        }
    }
};