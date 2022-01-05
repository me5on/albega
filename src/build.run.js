#!/usr/bin/env node


import sass from 'sass';
import C from './etc/general.const.js';
import link from './url/link.util.js';
import file from './util/file.util.js';
import recreate$ from './util/recreate$.util.js';
import replace from './util/replace.util.js';
import write$ from './util/write$.util.js';


(async () => {

    const src = file(C.src);
    const dst = file(C.dst);
    const map = dst + C.map;

    const {css, sourceMap: inf} = sass.compile(src, C.bld);
    inf.sources = inf.sources.map(replace);

    await recreate$(C.dst.dir);
    await write$({file: map, data: JSON.stringify(inf)});
    await write$({file: dst, data: css + link(map)});

})();
