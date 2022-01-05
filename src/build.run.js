#!/usr/bin/env node

import {join} from 'node:path';
import sass from 'sass';
import C from './etc/general.const.js';
import recreate$ from './util/recreate$.util.js';
import write$ from './util/write$.util.js';


const fileOf = (

    ({dir, ext, file}) => join(dir, file) + ext

);


(async () => {

    await recreate$(C.dst.dir);

    const src = join(C.src.dir, C.src.file) + C.src.ext;

    const {css: min} = sass.compile(src, {style: 'compressed', sourceMap: true});
    const {css: max} = sass.compile(src, {style: 'expanded'});

    await write$({file: fileOf(C.dst), data: min});
    await write$({file: fileOf(C.doc), data: max});

})();
