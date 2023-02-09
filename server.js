const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 4000
require('dotenv').config()


let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'quote'

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })
    
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get('/',(request, response)=>{
    db.collection('quotes').find().sort({likes: -1}).toArray()
    .then(data => {
        response.render('index.ejs', { info: data })
        
    })
    .catch(error => console.error(error))
})

app.post('/addQuote', (request, response) => {
    db.collection('quotes').insertOne({charName: request.body.charName,
    quoteStr: request.body.quoteStr, likes: 0})
    .then(result => {
        
        console.log('Quote added')
        response.redirect('/')
    })
    .catch(error => console.error(error))
})

app.put('/addOneLike', (request, response) => {
    db.collection('quotes').updateOne({charName: request.body.charNameS, quoteStr: request.body.quoteStrS,likes: request.body.likesS},{
        $set: {
            likes:request.body.likesS + 1
          }
    },{
        sort: {_id: -1},
        upsert: true
    })
    .then(result => {
        console.log(request)
        console.log('Added One Like')
        response.json('Like Added')
    })
    .catch(error => console.error(error))

})

app.delete('/deleteQuote', (request, response) => {
    db.collection('quotes').deleteOne({charName: request.body.charNameS})
    .then(result => {
        console.log('quote Deleted')
        response.json('quote Deleted')
    })
    .catch(error => console.error(error))

})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})