const express = require('express');

const app = express();
app.listen('8080', () => console.log('Listen on 8080'));
app.use(express.static('public'));

// First version of GET //
app.get('/', (req, res) => {
    res.send({
        message: 'hello express json answer',
    });
});

// Second version of GET //
// app.get('/', (req, res) => {
//     res.send('halo Timka');
// });

app.post('/', (req, res) => {
    console.log('We are now in POST');
    res.redirect('/');
});

