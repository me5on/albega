import {rm as rm$} from 'node:fs/promises';
import sass from 'sass';
import COLOR from './etc/color.const.js';
import C from './etc/general.const.js';
import exists$ from './util/exists$.util.js';
import file from './util/file.util.js';
import write$ from './util/write$.util.js';


const {rst, dim} = COLOR;
const {log, error} = console;


(async () => {

    const {css: data} = sass.compile(file(C.src), {style: 'expanded'});

    log(dim);
    log(data.replaceAll(C.newline, C.empty).replaceAll(C.space, C.empty));
    log(rst);

    const doc = file(C.doc);
    if (await exists$(doc)) {
        await rm$(doc, {recursive: true, force: true});
    }

    await write$({file: doc, data});

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
