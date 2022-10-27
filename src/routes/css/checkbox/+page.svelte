<script>
    import Droid from './Droid.svelte';
    let checked = false;

    $:{
        console.log(checked);
    }
</script>


<svelte:head>
    <title>CheckBox</title>
</svelte:head>

<input type="checkbox" name="" id="bb8" bind:checked={checked}>
<label for="bb8" class="bb8_label">
    <Droid checked={checked}/>
</label>
<section></section>

<style>
    input{
        opacity: 0;
    }

    section{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(rgb(210,124,71), black);
        z-index: -10;
        transition: 1s;
    }

    .bb8_label{
        width: 300px;
        height: 160px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: inline-block;
        background: linear-gradient(purple, orangered);
        box-shadow: inset 20px 0 10px rgba(0,0,0, .5),
            inset 5px 0 10px rgba(0,0,0, .5);
        border-radius: 150px;
        border: 1px solid black;
        cursor: pointer;
    }

    /*  */
    input[type=checkbox]:checked + label {
        box-shadow: inset -20px 0 10px rgba(0,0,0, .5),
                    inset -5px 0 10px rgba(0,0,0, .5);
    }
</style>