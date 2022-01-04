#!/usr/bin/env node

import {join} from 'node:path';
import sass from 'sass';
import C from './etc/general.const.js';
import recreate$ from './util/recreate$.util.js';
import write$ from './util/write$.util.js';


(async () => {

    await recreate$(C.dst.dir);

    const src = join(C.src.dir, C.src.file) + C.src.ext;

    const {css: min} = sass.compile(src, {sourceMap: true, style: 'compressed'});
    const {css: max} = sass.compile(src, {style: 'expanded'});

    await write$({file: join(C.dst.dir, C.dst.file) + C.dst.ext, data: min});
    await write$({file: join(C.doc.dir, C.doc.file) + C.doc.ext, data: max});

})();
