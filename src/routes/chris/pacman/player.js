import {  collisionWith , SPEED } from './setup';
export class Player{
    constructor({position, velocity}){
        this.position = position;
        this.velocity = velocity;
        this.radius = 15;
        this.radians = 0.75;
        this.openRate = 0.12;
        this.rotation = 0;
    }
    
    up(speed){
        this.velocity.y = speed;
    }
    down(speed){
        this.velocity.y = speed
    }
    left(speed){
        this.velocity.x = speed;
    }
    right(speed){
        this.velocity.x = speed;
    }
    collision(){
        this.velocity.x = 0;
        this.velocity.y = 0;
    }
    
    update(ctx){
        this.$draw(ctx);
        // this.$move(keys, lastKey);
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;

        if(this.velocity.x > 0) this.rotation = 0;
        else if(this.velocity.x < 0) this.rotation = Math.PI;
        else if(this.velocity.y > 0) this.rotation = Math.PI / 2;
        else if(this.velocity.y < 0) this.rotation = Math.PI * 1.5;


        if(this.radians < 0 || this.radians > 0.75){
            this.openRate = -this.openRate;
        }
        this.radians += this.openRate;
        
    };

    move(keys, lastKey, boundaries){
        // this.velocity.x = 0;
        // this.velocity.y = 0;
        if(keys.w.pressed && lastKey === 'w'){
            for(let i=0; i<boundaries.length; i++){
                const boundary = boundaries[i];
                if(collisionWith(this, boundary)){
                    this.velocity.y = 0;
                    break;
                }else{
                    this.velocity.y = -SPEED;
                }
            }
        }
        else if(keys.s.pressed  && lastKey === 's'){
            for(let i=0; i<boundaries.length; i++){
                const boundary = boundaries[i];
                if(collisionWith(this, boundary)){
                    this.velocity.y = 0;
                    break;
                }else{
                    this.velocity.y = SPEED;
                }
            }
        }
        else if(keys.a.pressed  && lastKey === 'a'){
            for(let i=0; i<boundaries.length; i++){
                const boundary = boundaries[i];
                if(collisionWith(this, boundary)){
                    this.velocity.x = 0;
                    break;
                }else{
                    this.velocity.x = -SPEED;
                }
            }
            
        }
        else if(keys.d.pressed  && lastKey === 'd'){
            for(let i=0; i<boundaries.length; i++){
                const boundary = boundaries[i];
                if(collisionWith(this, boundary)){
                    this.velocity.x = 0;
                    break;
                }else{
                    this.velocity.x = SPEED;
                }
            }
            
        }
    }


    $draw(c){
        if(!c)return;
        const { x, y} = this.position;
        const { radius} = this;
        c.save();
        c.translate(this.position.x, this.position.y);
        c.rotate(this.rotation);
        c.translate(-this.position.x, -this.position.y);

        c.beginPath();
        c.arc(x, y, radius, this.radians, Math.PI * 2 - this.radians);
        c.lineTo(this.position.x, this.position.y)
        c.fillStyle='yellow';
        c.fill();
        c.closePath();
        c.restore();
    };
};