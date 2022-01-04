import {mkdir as md$, rm as rm$} from 'node:fs/promises';
import exists$ from './exists$.util.js';


const recreate$ = (

    async $ => {

        if (await exists$($)) {
            await rm$($, {recursive: true, force: true});
        }

        await md$($, {recursive: true});
        
    }

);


// noinspection JSUnusedGlobalSymbols
export default recreate$;
