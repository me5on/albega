import {writeFile as w$} from 'node:fs/promises';


const {log} = console;


const write$ = (

    async ({file, data}) => {
        log('writing ', file, '...');
        await w$(file, data);
    }

);


// noinspection JSUnusedGlobalSymbols
export default write$;
