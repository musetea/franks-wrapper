<script>

</script>


<svelte:head>
    <title>Parallax</title>
</svelte:head>

<div class="wrapper">
    <div class="frame">
        <img src="clown.png" alt="clown" class="clown">
    </div>
    <img src="balloon_red.png" alt="balloon" class="balloon balloon_1">
    <img src="balloon_red.png" alt="balloon" class="balloon balloon_2">
    <img src="balloon_red.png" alt="balloon" class="balloon balloon_3"> 
</div>



<style>
    *{
        transition: 1s;
    }
    .wrapper{
        width: 600px;
        height: 400px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        perspective: 2000px;
        /* border: 1px solid black; */
    }
    .frame{
        position: absolute;
        width: 100%;
        height: 100%;
        border: 5px solid black;
        overflow: hidden;
        background: url('town.png');
        background-size: 50%;
        background-repeat: repeat-x;
        background-position: 10% 90%;
        box-shadow: 0 0 0 rgba(0,0,0, .7);
        transition: 1s;
    }

    .clown {
        position: absolute;
        height: 380px;
        top: 30px;
        right: 150px;
    }

    .balloon{
        position: absolute;
        pointer-events: none;
        transition: 1s;
    }

    .balloon_1{
        height: 300px;
        left: 80px;
        bottom: 0;
    }
    .balloon_2{
        height: 200px;
        top: 10px;
        right: 285px;
    }
    .balloon_3{
        height: 250px;
        top: 40px;
        right: 5px;
    }

    .wrapper:hover .frame{
        background-position: -10% 90%;
        transform: rotate(25deg) rotateZ(-15deg) translateZ(20px);
        box-shadow: -35px 5px 10px rgba(0,0,0, .2);
    }

    .wrapper:hover  .balloon_1{
        transform: translateX(15px) translateY(25px) rotate(-10deg) scale(0.9);
    }
    .wrapper:hover  .balloon_2{
        transform: translateX(-45px) translateY(25px) rotate(-10deg) scale(1.1);
    }
    .wrapper:hover  .balloon_3{
        transform: translateX(-30px) translateY(25px) rotate(-10deg) scale(1.1);
    }
</style>