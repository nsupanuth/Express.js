import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import routerProduct from './router-product'
import routerCustomer from './router-customer'

const app = express()
const users = [
    { id : 1 , name : `N'Nuth`},
    { id : 2 , name : `P'Bee` },   
    { id : 3 , name : `P'Cat` }    
]

app.get('/',(req,res) => {
    res.json(users)
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

const uri = 'mongodb://localhost/customer'

mongoose.Promise = Promise
mongoose.connect(uri,{ useMongoClient : true})
        .then(
            ()=>{
            console.log('Connected to MongoDB')
        },
            (err) => {
                console.log(err)
            }
        )

app.use('/products',routerProduct)
app.use('/customers',routerCustomer)

app.use((req,res) => {
    res.send('404 Page Not Found')
})

app.listen(8000)