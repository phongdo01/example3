const express = require('express')
const app = express()
const port = 3000
const data = require('./data.json')

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/api', (req, res) => res.json(data))
app.get('/api/:id', (req, res)=>{
    var isMap = false;
    data.forEach(element => {
        if (req.param("id")==element.id) {
            isMap = true
            res.json(element)
        }
    });
    if (!isMap) {
        res.send("The result is not map")
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))