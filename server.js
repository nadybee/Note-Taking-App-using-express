
const express = require('express')
const db = require('./db/db.json')
const path = require('path')
const { urlencoded } = require('express')
const PORT = 3002

const app = express()

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Homepage Route

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);


app.use('/api/notes', require('./api/notes'))
// app.use(express.static(path.join(_dirname, 'public')))




app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
