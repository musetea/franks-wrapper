export default class Ghost{
    static speed = 2;
    constructor({position, velocity, color='red'}){
        this.position = position;
        this.velocity = velocity;
        this.color = color;
        this.radius = 15;
        this.prevCollisions = [];
        this.speed = 2;
        this.scared =false;
    };

    update(context){
        this.$draw(context);
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    };

    autoRun(collisions){
        //console.log(collisions);
        if(collisions.length > this.prevCollisions){
            this.prevCollisions = collisions;
        }
        if(JSON.stringify(collisions) !== JSON.stringify(this.prevCollisions)){
            //console.log(collisions, this.prevCollisions);

            if (this.velocity.x > 0) this.prevCollisions.push('right');
			else if (this.velocity.x < 0) this.prevCollisions.push('left');
			else if (this.velocity.y < 0) this.prevCollisions.push('up');
			else if (this.velocity.y > 0) this.prevCollisions.push('down');

            //console.log(collisions, this.prevCollisions);
            const pathways = this.prevCollisions.filter((collision) => {
                return !collisions.includes(collision);
            });
            
            console.log(pathways);
            const dirIdx = Math.floor(Math.random() * pathways.length);
            const direction = pathways[dirIdx];
			console.log({dirIdx, direction});

            switch (direction) {
                case 'down':
                    this.velocity.y = this.speed;
                    this.velocity.x = 0;
                    break;
                case 'up':
                    this.velocity.y = -this.speed;
                    this.velocity.x = 0;
                    break;
                case 'left':
                    this.velocity.y = 0;
                    this.velocity.x = -this.speed;
                    break;
                case 'right':
                    this.velocity.y = 0;
                    this.velocity.x = this.speed;
                    break;
            }
            this.prevCollisions = [];
        }
    }

    $draw(c){
        c.beginPath();
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        c.fillStyle =  this.scared ? 'blue' : this.color;
        c.fill();
        c.closePath();
    }
}