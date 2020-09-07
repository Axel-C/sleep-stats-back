const express = require('express')
const app = express()
const port = 3001

function generateRandomData(size){
    return Array(size).fill().map(() => Math.round(Math.random() * 500))
  }
  
let data = new Array(3).fill().map(() => generateRandomData(6000));  

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  

app.get('/data', (req, res) => {
    res.json(data);
  })

  app.listen(port, () => {
    console.log(`Sleep app listening at http://localhost:${port}`)
  })