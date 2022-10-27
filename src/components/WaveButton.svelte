<script>
	export let title;
</script>


<div class="button">
    <p>{title}</p>
    <ul class="left">
        {#each {length:10} as _, i}
            <li></li>
        {/each}
    </ul>
    <ul class="right">
        {#each {length:10} as _, i}
            <li></li>
        {/each}
    </ul>
</div>

<style>
    .button{
        width: 200px;
        height: 60px;
        margin: 10px;
        border: 1px solid black;
        
        position: relative;
        overflow: hidden;
        transition: 1.6s;
        cursor: pointer;
    }
    .button:hover{
        color: white;
        transition: 1.6s cubic-bezier(0,2,.5,-0.3);
    }
    .button:hover li{
        left: 0;
        border-radius: 0;
        transition:  1.2s cubic-bezier(0,2,.2,-1);
    }

    .button p{
        position: relative;
        line-height: 60px;
        text-align: center;
        font-size: 25px;
        font-weight: 900;
        z-index: 10;
    }

    ul{
        list-style: none;
        height: 60px;
        display: block;
    }
    li{
        width: 100%;
        height: 6px;
        background-color: black;
        border-radius: 50%;
        transition: 1.2s;
    }

    .left{
        width: 80%;
        position: absolute;
        top: 0;
        left: 0;
    }
    .left li{
        position: relative;
        left: -205px;
    }

    .right{
        width: 80%;
        display: flex;
        flex-direction: column-reverse;
        position: absolute;
        top: 0;
        left: 20%;
    }
    .right li{
        position: relative;
        left: 205px;
    }

    .button li:nth-child(2){
        transition-delay: .05s;
    }
    .button li:nth-child(3){
        transition-delay: .1s;
    }
    .button li:nth-child(4){
        transition-delay: .15s;
    }
    .button li:nth-child(5){
        transition-delay: .2s;
    }
    .button li:nth-child(6){
        transition-delay: .25s;
    }
    .button li:nth-child(7){
        transition-delay: .3s;
    }
    .button li:nth-child(8){
        transition-delay: .35s;
    }
    .button li:nth-child(9){
        transition-delay: .4s;
    }
    .button li:nth-child(10){
        transition-delay: .45s;
    }


</style>