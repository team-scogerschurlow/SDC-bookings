const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

app.use(express.static(__dirname+'/../components/public'));



app.get('/test', (req, res) => {
    res.send('Its working')
})


app.listen(PORT, ()=>{console.log(`Listening on ${PORT}`)});