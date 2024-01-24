const express = require("express");
const app = express();
const port = 3333;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/' + "calcolatrice.html");
})

//installa cors e poi fai -> app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))

/*
app.get('/users', (req, res) => {
    const display = req.query.display;
    res.json({
        "display": display,
        "resu": eval(display)
    })
})
*/

app.post('/users', (req, res) => {
    console.log(req.body);
    const display = req.body.display;
    res.json({
        'display': display,
        'resu': eval(display)
    })
})


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
