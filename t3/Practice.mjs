import  fs  from "fs";

import chalk from "chalk";
import { log } from "console";

const word = 'hello';

const arr = fs.readdirSync('.'); 

for (let i = 0 ; i < arr.length ; i++) {
    const helloWord = arr[i];
    if (helloWord === 'node_modules')continue;
    
    const file = fs.readFileSync(helloWord , 'utf-8')
    if (file.includes(word) && helloWord !=='practice.mjs') {
        console.log(helloWord);
        log(chalk.blue(word))

    }
}

