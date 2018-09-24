const express = require('express');

const app = express();
app.listen('8080', () => console.log('Listen on 8080'));

// First version of GET //
// app.get('/', (req, res) => {
//     res.send('Congrats! You are done with your GET request');
// });

// Second version of GET //
app.get('/', (req, res) => {
    res.send('halo Timka');
});

