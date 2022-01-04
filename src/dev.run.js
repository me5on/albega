// eslint-disable-next-line no-console

import {rm as rm$} from 'node:fs/promises';
import {join} from 'node:path';
import sass from 'sass';
import C from './etc/general.const.js';
import exists$ from './util/exists$.util.js';
import write$ from './util/write$.util.js';


const {log, error} = console;


(async () => {

    const {css: data} = sass.compile(
        join(C.src.dir, C.src.file) + C.src.ext,
        {style: 'expanded'},
    );

    log(data);

    const file = join(C.doc.dir, C.doc.file) + C.doc.ext;
    if (await exists$(file)) {
        await rm$(file, {force: true});
    }

    await write$({file, data});

})().catch(e => {
    error(e);
    process.exit(1);
});


// log(sourceMap);
// log(sourceMap.sources.map(
//     $ => join(
//         ROOT,
//         D_BUILD,
//         relative(
//             C.main,
//             $.replace(PROTOCOL, ''),
//         ),
//     ),
// ));
// log(css);
