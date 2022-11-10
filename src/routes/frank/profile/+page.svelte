<script>
    let number = 0;
    const signOutUser = async () => {
        try{
            await signOut();
            window.location.href = "/";
        }catch(err){

        }   
    };

    const getRandomNumber = async () => {
        const response = await fetch('/api/random');
        if(!response.ok) return;

        const result = await response.json();
        number = result.number;
    };
 
</script>

<div class="container">
    <p>Email: email</p>
    <p>Number : {number}</p>
    <button on:click={getRandomNumber}>Get random number</button>
    <button on:click={signOutUser}>Sing Out</button>
</div>