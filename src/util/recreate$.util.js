import {mkdir as md$, rm as rm$} from 'node:fs/promises';
import C from '../etc/general.const.js';
import exists$ from './exists$.util.js';


const recreate$ = (

    async $ => {

        if (await exists$($)) {
            await rm$($, C.rf);
        }

        await md$($, C.rf);

    }

);


// noinspection JSUnusedGlobalSymbols
export default recreate$;
