<script>
    export let menu;
    let firstChar = menu.charAt(0) || '';
    let restChar = menu.substring(1) || '';
</script>

<div class="button">
    <p><span style:--char={firstChar}>{firstChar.toUpperCase()}</span>{restChar}</p>
</div>

<style>
    .button {
        width: 160px;
        height: 60px;
        margin: 30px;
        border: 1px solid black;
        position: relative;
    }

    .button p {
        font-size: 1.5em;
        font-weight: 900;
        line-height: 60px;
        text-align: center;
        position: relative;
        transition: .8s;
        z-index: 10;
    }
    .button:hover p{
        color: white;
    }

    .button span{
        color: transparent;
        position: relative;
    }
    .button span::before {
        content: var(--char);
        content: 'H';
        position: absolute;
        width: auto;
        height: 60px;
        color: black;
        transition: .2s ease-out;
    }
    .button:hover span::before {
        color: white;
        transform: translate(-65%, -10%) rotate(360deg);
        font-size: 2.5em;
    }

    .button:nth-of-type(2) span::before{
        content: 'P';
    }
    .button:nth-of-type(3) span::before{
        content: 'A';
    }
    .button:nth-of-type(4) span::before{
        content: 'C';
    }

    .button::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0);
        transition: .8s;
        z-index: 1;
    }
    .button:hover::after {
        background-color: rgba(0, 0, 0, 1);
        transform: rotate(10deg);
    }
</style>