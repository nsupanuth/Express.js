import express from 'express'

const router = express.Router()

const products = [
    {
        id : 1,
        name : 'Product 1001'
    },
    {
        id : 2,
        name : 'Product 1002'
    },
    {
        id : 3,
        name : 'Product 1003'
    }
]


router.get('/',(req,res) => {
    res.send(products)
})


export default router