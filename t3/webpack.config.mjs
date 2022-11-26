import path from 'path';

export default {
    entry: './script.js' , 
    output: {
        path: path.resolve('.' , 'dist'),
        fileName: 'output.js' ,
    },
    module: {
        rules: ['style-loader' , 'css-loader']
    }
}