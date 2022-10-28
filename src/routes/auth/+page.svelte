<script>
    let email = "";
    let password = "";
    let error = "";

    const login = async () => {
        error = "";
        const response = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify({
                email,
                password
            })
        })

        if(response.ok) return window.location.href = '/profile';
        const result = await response.json();
        error = result.error;

    };
    const signup = async () => {
        error = "";
        const response = await fetch("/api/signup", {
            method: "POST",
            body: JSON.stringify({
                email,
                password
            })
        })

        if(response.ok) return window.location.href = '/profile';
        const result = await response.json();
        error = result.error;

    };

</script>

<div class="container">
    <label for="email">email</label>
    <input type="email" id="email" bind:value={email}>
    <label for="password">password</label>
    <input type="password" id="password" bind:value={password}>
    <button on:click={login}>Sign In</button>
    <button on:click={signup}>Create an account</button>
    <p class="error">{error}</p>
</div>

