<header>
    <nav>
        <button on:click={()=>{
            window.history.back();
        }}>Back</button>
    </nav>
</header>
<slot></slot>


<style>
    nav{
        display: flex;
        justify-content: flex-end;
    }

    button{
        font-family: Impact;
        font-size: 16px;
        position: relative;
        width: 100px;
        height: 40px;
        border-radius: 10px;
        background: none;
        border: none;
        outline: none;
        color: white;
        cursor: pointer;
    }
    button::before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: black;
        z-index: -1;
    }
</style>