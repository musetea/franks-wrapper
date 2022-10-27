<script>
    import Morph from '../../../components/Morph.svelte';
    import Ripple from '../../../components/Ripple.svelte';
    import Morph2 from '../../../components/Morph2.svelte';
    import FloatingMarbles from '../../../components/FloatingMarbles.svelte';
    import VerticalWave from '../../../components/VerticalWave.svelte';
    import ClipPath from '../../../components/ClipPath.svelte';
    import FilterBlur from '../../../components/FilterBlur.svelte';

    const menus = ['HOME','ABOUT','CONTACT','SHOP'];
</script>


<svelte:head>
    <title>Morphing Clip Path 3D Cube</title>
</svelte:head>


<div class="container">
    <FilterBlur />
    <ClipPath menus={menus} />
    <VerticalWave menus={menus}/>
    <FloatingMarbles />
    <Morph2 menus={menus} />
    <Ripple menus={menus} />
    <Morph menus={menus}/>
</div>

<style>
    .container{
        
        margin-top: 1rem;
        display: grid;
        gap: 2rem;
    }    
</style>