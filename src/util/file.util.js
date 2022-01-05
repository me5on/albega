import {join} from 'node:path';


const file = (

    // eslint-disable-next-line no-shadow
    ({dir, ext, file}) => join(dir, file) + ext

);


export default file;
