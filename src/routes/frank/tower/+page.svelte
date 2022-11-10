<script>
	import { onMount } from 'svelte';
    import { ControlBar, CellSize, DefenderCose, NumberOfResources, EnermyInterval, CellGap, Resource} from './lib';
    import { Mouse, Cell, FloatingMessage  } from './lib';
    import { collision } from './lib';
    import { FONT_FAMILY, FONT_SIZE } from './lib';
    import { Aliens, EnemyTypes,Defenders, DefenderTypes, Card} from './lib';

    import { Defender} from './defender';
    import { Enemy} from './enemy';
    import { Projectile } from './projectile';

    let canvas, ctx;
    let frame = 0;
    let canvasPosition;
    let controlBar;
    const gridCells =[];
    const cards =[];
    const defenders = [];
    const defenderItems =[];
    const enermies = [];
    const enermieItems = [];

    const enermiesPositions = [];
    let enemyInterval = EnermyInterval;
    const projectiles = [];
    const resources = [];
    const floatingMessages = [];

    const mouse = Mouse;
    console.log(mouse);
    let numberOfResources = NumberOfResources;
    let isGameOver = false;
    let score = 0;
    let winningScore = 10;
    let selectedDefender = 0;

    

    onMount(()=>{
        ctx = canvas.getContext('2d');
        canvas.width = 900;
        canvas.height = 600;
        canvasPosition = canvas.getBoundingClientRect();
        console.log(canvasPosition);
        init();
    })

    const init = () => {
        loadImage();       
        controlBar = new ControlBar(canvas.width, 'blue');
        createGrid();
        handleDefenders();


        animate();
    };
    
    const loadImage = () =>{
        enermieItems.splice(0, enermieItems.length);    // 기존항목삭제
        Aliens.forEach((alien, i) => {
            const img = new Image()
            img.src = `/tower/${alien}`
            enermieItems.push({'image': img, ...EnemyTypes[i]})
        });

        defenderItems.splice(0, defenderItems.length);
        Defenders.forEach((defender, i) => {
            const img = new Image();
            img.src =  `/tower/${defender}`
            defenderItems.push({'image':img, ...DefenderTypes[i]});
        });
        
        cards.splice(0, cards.length);
        const img1 = new Image();
        img1.src = `/tower/${'boy_0.png'}`
        cards.push(new Card(0 * CellSize, 0, img1));

        const img2 = new Image();
        img2.src = `/tower/${'girl_0.png'}`
        cards.push(new Card(1 * CellSize, 0, img2));

        
        
    };
    
    const createGrid = ()=> {
        console.log(controlBar);
        for(let y = CellSize; y < canvas.height; y+=CellSize){
            for(let x = 0; x < canvas.width; x+= CellSize){
                gridCells.push(new Cell(x, y));
            }
        }
    };
    

    function animate(){
        if(!canvas) return;
        ctx.clearRect(0,0,canvas.width, canvas.height);
        controlBar.draw(ctx);
        handleGameGrid();
        handleCards();
        handleDefenders();
        handleProjectiles();
        handleEnermies();
        handleResources();
        handleFloatingMessage();
        
        handleGameStatus();
        frame++;
        if(!isGameOver){
            requestAnimationFrame(animate);
        }
    };

    function handleGameGrid(){
        for(let i=0; i < gridCells.length; i++){
            gridCells[i].draw(ctx, mouse);
        }
    };

    function handleCards(){
        cards.forEach(card => {
            card.update(collision(mouse, card), mouse.click);
            card.draw(ctx)
        });
    }

    function handleDefenders(){
        for(let i=0; i<defenders.length; i++){
            //const defender = defenders[i];
            //if(!defender) break;

            defenders[i].draw(ctx);
            const tile = defenders[i].update(frame);
            if(tile) projectiles.push(tile);

            // ENEMY 체크 
            if(enermiesPositions.indexOf(defenders[i].y) !== -1){
                defenders[i].shooting = true;
            }else{
                defenders[i].shooting = false;
            }
            //console.log(enermiesPositions, defenders[i]);


            //defenders[i].handleProjectiles(ctx, canvas.width);
            for(let j=0; j<enermies.length; j++){
                //const enemy = enermies[j];
                if(defenders[i] &&  collision(defenders[i], enermies[j])){
                    enermies[j].movement = 0;
                    defenders[i].health -= 0.2;
                }

                if(defenders[i] && defenders[i].health <= 0){
                    defenders.splice(i, 1);
                    i--;
                    enermies[j].movement = enermies[j].speed;
                }
            }
        }
    };

    function handleGameStatus(){
        ctx.fillStyle = 'gold';
        ctx.font = `${FONT_SIZE}px ${FONT_FAMILY}`;
        
        const str = `Resources : ${numberOfResources}`;
        const str1 = `Score : ${score}`;
        ctx.fillText(str1, (cards.length*CellSize) ,30)
        ctx.fillText(str, (cards.length*CellSize),60);

        if(isGameOver){
            displayGameOver();
        }
        if(score >= winningScore && enermies.length === 0){
            displayWinningMessage();
        }

    };
    const displayGameOver = () => {
        ctx.fillStyle = 'gold';
        ctx.font = `${60}px ${FONT_FAMILY}`;
        const str = "GAME OVER!!";
        ctx.fillText(str, 250, 350);
    }
    const displayWinningMessage = () => {
        ctx.fillStyle = 'black';
        ctx.font = `${60}px ${FONT_FAMILY}`;
        const str = "LEVEL COMPLETE";
        ctx.fillText(str, 150, 350);
        ctx.font = `${30}px ${FONT_FAMILY}`;
        const str1 = `You Win with ${score} points!`;
        ctx.fillText(str1, 350, 400);
        
    }

    function handleEnermies(){
        for(let i=0; i<enermies.length; i++){
            enermies[i].update(frame);
            enermies[i].draw(ctx);

            // 게임오버체크 
            if(checkGameOver(enermies[i])){
                isGameOver = true;
            }
            // health 체크 
            if(enermies[i].health <= 0){
                const gainedResources = enermies[i].maxHealth/10;
                floatingMessage(enermies[i], gainedResources);


                numberOfResources += gainedResources;
                score += gainedResources;
                const findThidY  = enermiesPositions.indexOf(enermies[i].y);
                if(findThidY !== -1){
                    enermiesPositions.splice(findThidY, 1);
                    //console.log(enermiesPositions);
                }
                enermies.splice(i, 1);
                i--;
            }
        }

        if(frame % enemyInterval === 0 && score < winningScore ) {
            
            // 적생성 
            const verticalPosition = Math.floor(Math.random() * 5 + 1) * CellSize + CellGap;
            const enemyType = enermieItems[Math.floor(Math.random() *enermieItems.length)];
            console.log(enemyType);
            enermies.push(new Enemy(canvas.width, verticalPosition, enemyType))
            enermiesPositions.push(verticalPosition);
            
            if(enemyInterval > 120){
                enemyInterval -= 100;
            }
        }
    };
    const floatingMessage = (gain, enemy) =>{
        if(!enemy) return;
        floatingMessages.push(new FloatingMessage(`+${gain}`, enemy.x, enemy.y, 30, 'black'));
        floatingMessages.push(new FloatingMessage(`+${gain}`, enemy.x, enemy.y, 30, 'gold'));
    }
    const checkGameOver = (enemy) => {
        if(!enemy) return;
        return enemy.x < 0; 
    };


    // 프로젝 타일 
    function handleProjectiles(){
        for(let i=0; i<projectiles.length; i++){

            // 업데이트 및 화며출력 
            projectiles[i].update();
            projectiles[i].draw(ctx);

            // 
            for(let j=0; j<enermies.length; j++){
                if(enermies[j] && collision(projectiles[i], enermies[j])){
                    enermies[j].health -= projectiles[i].power;
                    projectiles.splice(i, 1);
                    i--;
                }
            }

            // 체크
            if(projectiles[i] && projectiles[i].x > (canvas.width - CellSize)){
                projectiles.splice(i, 1);
                i--;
            }
        }
    };

    function handleResources(){
        if(frame % 500 ===  0 && score < winningScore){
            resources.push(new Resource(canvas.width));
        }

        for(let i=0; i<resources.length; i++){
            resources[i].draw(ctx);

            if(resources[i] && mouse.x && mouse.y && collision(resources[i], mouse)){
                numberOfResources += resources[i].amout;
                
                floatingMessages.push(new FloatingMessage(`${resources[i].amout}`,
                    resources[i].x, resources[i].y, 20, 'black' ));
                floatingMessages.push(new FloatingMessage(`${resources[i].amout}`,
                    resources[i].x, resources[i].y, 20, 'gold' ));
                resources.splice(i, 1);
                i--;
            }
        }
    };

    // 
    function handleFloatingMessage(){
        for(let i=0; i<floatingMessages.length; i++){
            floatingMessages[i].update();
            floatingMessages[i].draw(ctx);
            
            if(floatingMessages[i].lifeSpan >= 50){
                floatingMessages.splice(i, 1);
                i--;
            }
        }

        
    }


    const onCanvasMouseMove = (e)=> {
        mouse.x = e.x - canvasPosition.left;
        mouse.y = e.y - canvasPosition.top;
    }
    const onCanvasMouseLeave = (e)=> {
        mouse.x = undefined;
        mouse.y = undefined;
    };
    const onCanvasMouseDown = (e) => {
        mouse.click = true;
        for(let i=0; i<cards.length; i++){
            const card = cards[i];

            if(collision(card, mouse)){
                cards.forEach(c => c.selected=false);
                card.selected = true;
                selectedDefender = i;
                break;
            }
        }
        console.log(cards, mouse);
    };
    const onCanvasMouseUp = (e) => {
        mouse.click = false;
    };
    const onCanvasResize = (e) => {
        canvasPosition = canvas.getBoundingClientRect();
    }

    const onCanvasClick = (e) => {
        const gridPositionX = mouse.x - (mouse.x % CellSize) + CellGap;
        const gridPositionY = mouse.y - (mouse.y % CellSize) + CellGap;
        if(gridPositionY < CellSize) return;
        
        if(!checkDefender(gridPositionX, gridPositionY)) return;
        addDefender(gridPositionX, gridPositionY);
    };

    const checkDefender = (x, y) => {
        for(let i=0; i<defenders.length; i++){
            const defender = defenders[i];
            if(!defender) continue;
            if(defender.x === x && defender.y === y) return false;
        }
        return true;
    }
    const addDefender = (x, y) => {
        let defenderCose = DefenderCose;
        if(numberOfResources >= defenderCose){
            // const defenderType = defenderItems[Math.floor(Math.random() * defenderItems.length)];
            const defenderType = defenderItems[selectedDefender];
            console.log(defenderType);

            defenders.push(new Defender(x, y, defenderType));
            numberOfResources -= defenderCose;
        }else{
            floatingMessages.push(new FloatingMessage('need more resource', mouse.x, mouse.y, 15, 'blue'))
        }
    }

</script>

<svelte:window on:resize={onCanvasResize} />

<canvas bind:this={canvas}
    on:mousemove={onCanvasMouseMove}
    on:mouseleave={onCanvasMouseLeave}
    on:mousedown={onCanvasMouseDown}
    on:mouseup={onCanvasMouseUp}
    on:click={onCanvasClick}
>
</canvas>

<style>
    canvas{
        width: 900px;
        height: 600px;
        background-color: white;
        font-family: 'Orbitron', sans-serif;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>