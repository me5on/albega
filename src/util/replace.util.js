import C from '../etc/general.const.js';


const replace = (

    $ => $.replace(C.protocol + C.root, C.dot)

);


export default replace;
