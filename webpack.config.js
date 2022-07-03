const path = require('path');
module.exports = {
    // entry: './scripts/firstApp.js',
    entry: './src/secondApp.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
