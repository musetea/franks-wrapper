<script>
    import SvgButton from './SvgButton.svelte';
    import DrippingLiquid from './DrippingLiquid.svelte';
    import ButtonHover from './ButtonHover.svelte'; 
    import { Email, PhoneVolume, Post, Chat } from '../../../components/svg/svg';
    import PoppingButton from './PoppingButton.svelte';
    import TextButton from './TextButton.svelte';
    import BlurButton from './BlurButton.svelte';
	import Button3d from './Button3d.svelte';

    const menus = [
        'Home',
        'Shop',
        'Portfolio',
        'Contact'
    ];
    const menus2 = [
        { name :'Email', svg :Email},
        { name : 'Phone', svg: PhoneVolume},
        { name : 'Post', svg : Post },
        { name: 'Chat', svg: Chat}
    ];

    const menus3 = [
        'Home',
        'Products',
        'About',
        'Contact'
    ];

    const icons = [
        'fab fa-facebook-f',
        'fab fa-instagram',
        'fab fa-youtube',
        'fab fa-linkedin-in',
        'fab fa-google-plus-g',
        'fab fa-twitter',
        'fab fa-pinterest-p',
        'fab fa-whatsapp',
        'fab fa-twitch',
    ];
</script>


<svelte:head>
    <title>Animatin Stroke SVG</title>
</svelte:head>

<div class="container7">
    {#each icons as icon}
        <Button3d icon={icon} />
    {/each}
</div>

<div class="container6">
    {#each icons as icon}
        <BlurButton icon={icon} />
    {/each}

    <svg>
        <defs>
            <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="name" />
                <feColorMatrix in='name' mode='matrix' values='1 0 0 0 0
                                                               0 1 0 0 0
                                                               0 0 1 0 0
                                                               0 0 0 30 -15 '
                    result='aab' />
                <feBlend in='SourceGraphic' ins='aab' />
            </filter>
        </defs>
    </svg>
</div>


<div class="container5">
    {#each menus3 as menu }
        <TextButton menu={menu} />
    {/each}
</div>


<div class="container4">
    {#each icons as icon}
        <div class="button">
            <i class={icon}></i>
        </div>
    {/each}
</div>



<div class="container3">
    {#each menus3 as menu}
        <PoppingButton menu={menu} />
    {/each}
</div>


<div class="container2">
    {#each menus2 as menu}
        <ButtonHover menu={menu} />
    {/each}
</div>


<div class="container">
    {#each menus as menu}
        <SvgButton menu={menu} />
    {/each}
    <br />
    <DrippingLiquid />

</div>


<style>

    .container7 {
        display: grid;
        grid-template-columns: repeat(3, auto);
        gap: 1rem;
        margin: 1rem 1rem;
    }

    .container6{
        display: grid;
        grid-template-columns: repeat(3, auto);
        gap: 2rem;
    }

    .container4 {
        --bg-color: #3c5a99;

        width: 200px;
        height: 200px;
        margin: 70px auto;
        position: relative;
        display: grid;
        grid-template-columns: repeat(3, auto);
    }
    .container4 .button{
        display: block;
        position: relative;

        width: 50px;
        height: 50px;
        top: 0;
        left: 0;
        border-radius: 100%;
        overflow: hidden;
    }
    .container4 .button::before {
        content: '';
        position: absolute;
        top: 50px;
        left: -50px;
        width: 10px;
        height: 10px;
        background-color: var(--bg-color);
        border-radius: 100%;
        transition: .15s ease-in;
    }
    .container4 .button:hover::before {
        top: 0;
        left: 0;
        width: 50px;
        height: 50px;
    }

    .container4 .button::after {
        content: '';
        position: absolute;
        top: 0;
        left: 60px;
        width: 45px;
        height: 45px;
        background-color: var(--bg-color);
        background-color: white;
        border-radius: 100%;
        transition: .25s cubic-bezier(.14,1.88,.3,.76);
    }
    .container4 .button:hover::after {
        top: -2px;
        left: 10px;
        width: 45px;
        height: 45px;
        transition-delay: .2s;
    }

    .container4 .button:nth-of-type(2)::before {
        background-color: #c32aa3;
    }
    .container4 .button:nth-of-type(3)::before {
        background-color: #ff0000;
    }
    .container4 .button:nth-of-type(4)::before {
        background-color: #007bb5;
    }
    .container4 .button:nth-of-type(5)::before {
        background-color: #db4437;
    }
    .container4 .button:nth-of-type(6)::before {
        background-color: #1da1f2;
    }
    .container4 .button:nth-of-type(7)::before {
        background-color: #db081c;
    }
    .container4 .button:nth-of-type(8)::before {
        background-color: #25d366;
    }
    .container4 .button:nth-of-type(9)::before {
        background-color: #6441a4;
    }
  

    .container4 i{
        font-size: 30px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        color: var(--bg-color);
        z-index: 10;
    }

    .container4 .fa-facebook-f {
        
    }
    .container4 .fa-instagram {
        color: #c32aa3;
    }
    .container4 .fa-youtube {
        color: #ff0000;
    }
    .container4 .fa-linkedin-in {
        color: #007bb5;
    }
    .container4 .fa-google-plus-g {
        color: #db4437;
    }
    .container4 .fa-twitter {
        color: #1da1f2;
    }
    .container4 .fa-pinterest-p {
        color: #db081c;
    }
    .container4 .fa-whatsapp {
        color: #25d366;
    }
    .container4 .fa-twitch{
        color: #6441a4;
    }

    .container3 {
        width: 270px;
        margin: 60px auto;
        position: relative;

    }

    .container2{
        width: 160px;
        position: relative;
        margin: 60px auto;
    }

    .container{
        width: 300px;
        margin: 150px auto;
        position: relative;
    }
</style>