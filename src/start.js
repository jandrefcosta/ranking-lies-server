const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => { 
  res.send('Hello World! ')
})

app.get('/ranking-list', (req, res) => { 
  res.json([
    { resumo: "Minha esposa é pica grossa", points: 150 },
    { resumo: "Fui sequestrado", points: 115 },
    { resumo: "Vendi um carro ontem também, igual ao seu", points: 45 }
  ])
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))