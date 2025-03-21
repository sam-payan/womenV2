const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());

app.post('/',(req,res) =>{
    console.log(req.body);
    res.send('Hello ');
})

app.listen(port,()=>{
    console.log('Server is running on ' + port);
})