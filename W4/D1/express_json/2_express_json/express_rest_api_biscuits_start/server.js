const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

const biscuits = [
  { name: "Digestives", brand: "McVitie's" },
  { name: "Shortbreads", brand: "Walkers" },
  { name: "Jammy Dodgers", brand: "Burton's" },
  { name: "Custard Creams", brand: "Crawford's" }
];

app.get('/api/biscuits', (req, res) => {
  res.json(biscuits);
});

app.post('/api/biscuits/:id', (req, res) =>{
  console.log('req.body', req.body);
});
 
app.get('/api/biscuits/:id', (req, res) => {
  res.json(biscuits[req.params.id]);
})

app.get('/' ,(req, res) => {
  res.sendFile('index.html', {'root': 'public'})
});

app.listen(9000, function () {
  console.log(`App running on port ${ this.address().port }`);
});