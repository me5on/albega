import {dirname, join, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';


const ROOT = resolve(
    dirname(fileURLToPath(import.meta.url)),
    '../../', // relative to project root
);


const C = Object.freeze({

    root:     ROOT,
    protocol: 'file://',

    newline: /(?<!\n)\n/gu,
    dot:     '.',
    space:   ' ',
    empty:   '',

    map: '.map',

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

    dev: Object.freeze({style: 'expanded', sourceMap: true}),
    bld: Object.freeze({style: 'compressed', sourceMap: true}),

    rf: Object.freeze({recursive: true, force: true}),

});


// noinspection JSUnusedGlobalSymbols
export default C;
