import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.json({message: 'dafny'})
})

app.listen(3333)