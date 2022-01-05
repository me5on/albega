#!/usr/bin/env node

import sass from 'sass';
import C from './etc/general.const.js';
import file from './util/file.util.js';
import recreate$ from './util/recreate$.util.js';
import write$ from './util/write$.util.js';


(async () => {

    await recreate$(C.dst.dir);

    const src = file(C.src);

    const {css: min} = sass.compile(src, {style: 'compressed', sourceMap: true});
    const {css: max} = sass.compile(src, {style: 'expanded'});

    await write$({file: file(C.dst), data: min});
    await write$({file: file(C.doc), data: max});

})();
