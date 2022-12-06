const express = require('express'); 
const bodyParser = require('body-parser')
const app = express();



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://username:password@cluster0.23ktvb1.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  app.use(bodyParser.urlencoded({extended:true}))

  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html') 
  })
    
  app.post('/quotes', (req,res) => {
    quotesCollection.insertOne(req.body)
    .then(result => {
      console.log(result)
    // console.log(req.body)
  })
  .catch(error => console.error(error))
  })
    
  app.listen(3000, function() {
    console.log('listening on 3000')
  })
    

  client.close();
});





// const MongoClient = require('mongodb').MongoClient



// MongoClient.connect('mongodb+srv://username:password@cluster0.23ktvb1.mongodb.net/?retryWrites=true&w=majority', 
// { useUnifiedTopology: true, 
//   useNewUrlParser: true,
// })
// .then(client => {
//   console.log('Connected to Database')
//   const db = client.db('Rick-Shanchez-quotes')
//   const quotesCollection = db.collection('quotes')

//   app.use(bodyParser.urlencoded({extended:true}))

//   app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html') 
//   })
    
//   app.post('/quotes', (req,res) => {
//     quotesCollection.insertOne(req.body)
//     .then(result => {
//       console.log(result)
//     // console.log(req.body)
//   })
//   .catch(error => console.error(error))
//   })
    
//   app.listen(3000, function() {
//     console.log('listening on 3000')
//   })
    

// })
// .catch(error => console.error(error))

// MongoClient.connect('mongodb+srv://username:password@cluster0.23ktvb1.mongodb.net/?retryWrites=true&w=majority' , {
//   useUnifiedTopology : true,
//   useNewUrlParser: true,
//   serverApi: ServerApiVersion.v1
// },
// (err , client) => {
// if (err) return console.error(err)
// console.log('connected to database')
// // const db = client.db('Rick-Shanchez-quotes')
// })

