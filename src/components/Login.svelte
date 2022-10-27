<script>

</script>

<div class="container">
    <h1>Login</h1>
    <form action="">
        <div class="form-group">
            <input type="text" name="name" id="name">
            <label for="name">
                <span>N</span>
                <span>A</span>
                <span>M</span>
                <span>E</span>
            </label>
        </div>
        <div class="form-group">
            <input type="url" name="" id="website">
            <label for="website">
                <span>W</span>
                <span>E</span>
                <span>B</span>
                <span>S</span>
                <span>I</span>
                <span>T</span>
                <span>E</span>
            </label>
        </div>
        <div class="form-group">
            <input type="email" name="" id="email">
            <label for="email">
                <span>E</span>
                <span>M</span>
                <span>A</span>
                <span>I</span>
                <span>L</span>
            </label>
        </div>
        <div class="submit-button-wrapper">
            <input type="submit" value="Login">
        </div>
    </form>
</div>


<style>

    .container{
        width: 300px;
        margin: 80px auto;
        position: relative;
    }

    form{
        width: 100%;
        padding: 60px 0;
        border-radius: 10px;
        border: 2px solid black;
    }

    h1{
        width: 100%;
        font-size: 80px;
        position: absolute;
        top: -69px;
        color: white;
        -webkit-text-stroke: 2px black;

        text-align: center;

    }
    h1::before{
        content: '';
        width: 90%;
        height: 50px;

        position: absolute;
        top: 71px;
        left: 15px;
        background-color: white;

        transition: .2s;
    }
    h1::after {
        content: 'g';
        width: 50px;
        height: 100px;
        color: black;

        position: absolute;
        top: 3px;
        left: 138px;
        clip-path: polygon(0 70%, 100% 70%, 100% 100%, 0% 100%);
    }

    /* FORM */
    .form-group {
        position: relative;
    }
    input{
        margin: 20px;
        padding: 5px;
        border: none;
        transition: .2s;
    }
    input:active, input:hover, input:focus {
        border: none;
        outline: none;
        background-color: rgba(0,0,0,0);
    }

    /* LABEL */
    label{
        width: 262px;
        position: absolute;
        top: 23px;
        left: 25px;
        pointer-events: none;
    }
    label::before {
        content: '';
        width: 100%;
        height: 30px;

        position: absolute;
        left: -8px;
        bottom: -2px;

        background-color: rgba(0,0,0,1);
        transition: 0.2s;
    }

    .form-group:hover label::before, 
    input:focus ~ label::before {
        background-color: rgba(0,0,0,1);
        height: 0;
        border: 2px solid black;
    }

    span {
        display: inline-block;
        font-size: 12px;
        line-height: 25px;
        position: relative;
        color: rgba(255,255,255,1);
        z-index: 10;
        transition: .3s cubic-bezier(0, .8,.1,1.5);
    }

    .form-group:hover span,
    input:focus ~ label span {
        transform: translateY(-22px);
        color: rgba(0,0,0,.8);
    }

    span:nth-child(1){
        transition-delay: .05s;
    }
    span:nth-child(2){
        transition-delay: .1s;
    }
    span:nth-child(3){
        transition-delay: .25s;
    }
    span:nth-child(4){
        transition-delay: .3s;
    }
    span:nth-child(5){
        transition-delay: .35s;
    }
    span:nth-child(6){
        transition-delay: .4s;
    }
    span:nth-child(7){
        transition-delay: .45s;
    }

    input[type='submit']{
        margin: 0;
        padding: 0;
        width: 100%;
        margin-top: 50px;
        font-size: 35px;
        font-weight: 700;
        text-transform: lowercase;
        color: white;
        background-color: transparent;
        -webkit-text-stroke: 2px black;

        cursor: pointer;
        
    }
    input[type='submit']:hover {
        color: black;
    }

</style>