const express = require('express');

const app = express();
app.listen('8080', () => console.log('Listen on 8080'));
app.use('/', express.static('public'));

let lastInput = null;

// First version of GET //
app.get('/api', (req, res) => {
    res.send({
        message: 'hello express json answer',
        lastInput: lastInput,
    });
});

// Second version of GET //
// app.get('/', (req, res) => {
//     res.send('halo Timka');
// });

app.post('/api', (req, res) => {
    console.log('We are now in POST');
    lastInput = req.body;
    res.redirect('/api');
});

