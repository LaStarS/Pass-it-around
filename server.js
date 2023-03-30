const express = require('express');
const app = express();

const PORT = process.env.PORT || 8081;

app.get('/', (req, res) => {
    res.send(`
        <h2>99 cases of water on the truck</h2>
        <a href="/98">Take one down, pass it around</a>
    `);
});

app.get('/:numOfCases', (req, res) => {
    const numOfCases = parseInt(req.params.numOfCases);
    if (isNaN(numOfCases) || numOfCases < 0) {
        res.send(`
            <h2>Invalid input!</h2>
            <a href="/">Start over</a>
        `);
    } else if (numOfCases === 0) {
        res.send(`
            <h2>There are no more cases of water!</h2>
            <a href="/">Oh No!!!</a>
        `)
    } 
        let newNumOfCases = numOfCases - 1;
           res.send(`
            <h2>${numOfCases} cases of water on the truck</h2>
            <a href="/${newNumOfCases}">Take one down, pass it around</a>
        `);
    }
);

app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT);
});

