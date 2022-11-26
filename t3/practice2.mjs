import  fs  from "fs";

import chalk from "chalk";

import { log } from "console";


const a = 'a';
const b = 'b'

const arr = fs.readdirSync('.'); 

for (let i = 0 ; i < arr.length ; i++) {
    const Word = arr[i];
    if (Word === 'node_modules')continue;
    
    const file = fs.readFileSync(Word , 'utf-8')
    if (file.includes(a) && Word !== 'practice2.mjs') {
        console.log('z');
        log(chalk.yellow('z'))
    }
    if (file.includes(b) && Word !== 'practice2.mjs') {
        console.log('y');
        log(chalk.red('y'))

    }
}

