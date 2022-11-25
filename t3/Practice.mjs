import  fs  from "fs";

const word = 'hello';

const arr = fs.readdirSync('.'); 

for (let i = 0 ; i < arr.length ; i++) {
    const helloWord = arr[i];
    const file = fs.readFileSync(helloWord , 'utf-8')
    if (file.includes(word) && helloWord !== 'practice.mjs') {
        console.log(helloWord);
    }
    
}

