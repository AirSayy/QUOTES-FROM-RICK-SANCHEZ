const express = require('express'); 
const bodyParser = require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({extended:true}))

// MongoClient.connect('mongodb+srv://airsayy:Wendyy1990@cluster0.23ktvb1.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true })
//   .then(client => {
//     console.log('Connected to Database')
//   })
//   .catch(error => console.error(error))

MongoClient.connect('mongodb+srv://username:password@cluster0.23ktvb1.mongodb.net/?retryWrites=true&w=majority' , {
  useUnifiedTopology : true,
  useNewUrlParser: true,
  
},
(err , client) => {
if (err) return console.error(err)
console.log('connected to database')
// const db = client.db('Rick-Shanchez-quotes')
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html') 
})


app.post('/quotes', (req,res) => {
  console.log(req.body)
})




app.listen(3000, function() {
  console.log('listening on 3000')
})
