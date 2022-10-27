<script>
    export let id;
    let stdDeviation= 10;
    const values =`1 0 0 0 0 
                   0 1 0 0 0 
                   0 0 1 0 0 
                   0 0 0 100 -15`;
</script>


<svg>
    <defs>
        <fileter id={id}>
            <feGaussianBlur stdDeviation={stdDeviation} />
            <feColorMatric values={values} />
            <feBlend in='SourceGraphic' />
        </fileter>
    </defs>
</svg>