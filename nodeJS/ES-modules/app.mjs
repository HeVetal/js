// import {characters, greet} from './characters.mjs'
// import * as char from './characters.js' // the same
// import log from './characters.mjs'
// import log, * as char from './charset.js'  char,characters  char.greet()
// import log, {characters, greet as hello} from './characters.mjs'
// import log, {characters, greet} from './characters.mjs'
//
// log()

// for (const c of characters) {
//     greet(c)
//
// }
import log from "./characters.mjs";

async function maim() {
    try {
        const {characters, greet} = await import('./characters.js')
        for (const c of characters) {
            greet(c)
        }
    } catch (error) {
        console.log('error')
    }
}
maim()
