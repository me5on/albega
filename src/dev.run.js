#!/usr/bin/env node


import {rm as rm$} from 'node:fs/promises';
import sass from 'sass';
import COLOR from './etc/color.const.js';
import C from './etc/general.const.js';
import link from './url/link.util.js';
import file from './util/file.util.js';
import replace from './util/replace.util.js';
import write$ from './util/write$.util.js';


const {rst, dim} = COLOR;
const {log, error} = console;


(async () => {

    const src = file(C.src);
    const doc = file(C.doc);
    const map = doc + C.map;

    const {css, sourceMap: inf} = sass.compile(src, C.dev);
    inf.sources = inf.sources.map(replace);

    log(dim);
    log(css.replaceAll(C.newline, C.empty).replaceAll(C.space, C.empty));
    log();
    log(inf);
    log(rst);

    await rm$(map, C.rf);
    await rm$(doc, C.rf);

    await write$({file: map, data: JSON.stringify(inf)});
    await write$({file: doc, data: css + link(map)});

})().catch(e => {
    error(e);
    process.exit(1);
});
