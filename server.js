
const express = require('express')
const path = require('path')

const PORT = 3002

const app = express()

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static('public'))

//Homepage Route

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// app.get('*', (req, rest) =>{
//     res.sendFile(path.join(__dirname, '/public/index.html'))
// })




app.use('/api/notes', require('./routes/notes'))




app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
