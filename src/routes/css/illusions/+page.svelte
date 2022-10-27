<script>

</script>

<svelte:head>
    <title>Optical Illusion</title>
</svelte:head>

<div class="container">
    <label for="checkbox1">Reveal</label>
    <input type="checkbox" name="checkbox1" id="checkbox1">
    <h1 class="question">Which dinosaur is darker and which is lighter colour?</h1>
    <h1 class="answer">Both dinosaurs are the same colour!</h1>
    <div class="background"></div>

    <div class="dinosaurs">
        <section class="dinosaur"></section>
        <section class="dinosaur"></section>
    </div>
</div>

<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font: bold 35px helvetica;
    }

    .container{
      overflow: hidden;
      /* width: 100vw; */
      /* height: 100vh; */
    }

    h1{
        position: absolute;
        top: 50%;
        left: 50%;
        transition: 1s;
        
    }
    h1.question{
        width: 100%;
        transform: translate(-50%, -50%);
        text-align: center;
        z-index: 10;
    }
    h1.answer{
        transform: rotateX(90deg);
        text-align: right;
        margin-right: 100px;
    }

    .container input {
        position: relative;
        top: 100px;
        left: 100px;
        width: 20px;
        height: 20px;
        z-index: 10;
    }
    .container label{
        position: relative;
        top: 100px;
        left: 100px;
        z-index: 10;
    }

    .container .background{
        background: linear-gradient(#fff, #f6f406 10%, #0c0af3 80%);
        top: 0;
        left: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        transition: 0.5s ease-in;
        transform-origin: bottom;
    }

    .container .dinosaurs{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        
    }

    .container  .dinosaur {
        position: relative;
        width: 600px;
        height: 325px;
        background-image: url('dinosaur.png');
        background-size: contain;
        background-repeat: no-repeat;
        border: 1px solid red;
    }

    #checkbox1:checked ~ .background {
        transform: scaleY(0);
    }
    #checkbox1:checked ~ .question{
        transform: translate(-50%, -50%) rotateX(90deg);
    }
    #checkbox1:checked ~ .answer{
        transform: rotate(0);
    }

    section:nth-child(1){
        transform: translateX(150px);
    }
    section:nth-child(2){
        transform: translateX(0);
    }
</style>