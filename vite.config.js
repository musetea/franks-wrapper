import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

const config = {
	plugins: [sveltekit({

        // resolve:{
        //     alias:{
        //         // $comp: path.resolve('./src/components'),
        //         // $lib: path.resolve('./src/lib'),
        //     }
        // }
   
    }
        )], };

    

export default config;
