import {dirname, join, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';


const ROOT = resolve(
    dirname(fileURLToPath(import.meta.url)),
    '../../', // relative to project root
);


const C = Object.freeze({

    protocol: /^file:\/\//u,

    src: Object.freeze({
        dir:  join(ROOT, './scss'),
        file: 'index',
        ext:  '.scss',
    }),

    dst: Object.freeze({
        dir:  join(ROOT, './css'),
        file: 'index',
        ext:  '.css',
    }),

    doc: Object.freeze({
        dir:  join(ROOT, './docs/example'),
        file: 'style',
        ext:  '.css',
    }),

});


// noinspection JSUnusedGlobalSymbols
export default C;
