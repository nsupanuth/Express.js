import express from 'express'
import setupCustomerModel from './model-customer'

const router = express.Router()
const CustomerModel = setupCustomerModel()


router.get('/',(req,res) => {
    CustomerModel.find({},(err,customers) => {
        if(err){
            res.json(err)
        }
           
        res.json(customers)
    })
    .limit(5)
})

export default router