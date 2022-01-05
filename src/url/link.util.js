import C from '../etc/general.const.js';


const link = (

    $ => `\n/*# sourceMappingURL=${String($ || '').replace(C.root, C.dot)}*/`

);


export default link;
