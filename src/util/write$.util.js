import {writeFile as w$} from 'node:fs/promises';
import COLOR from '../etc/color.const.js';


const {done, rst, info} = COLOR;
const log = process.stdout.write.bind(process.stdout);


const write$ = (

    async ({file, data}) => {
        log(`${info}WRITING${rst} ${file}... `);
        await w$(file, data);
        log(`${done}DONE${rst}\n`);
    }

);


// noinspection JSUnusedGlobalSymbols
export default write$;
