import mongoose from 'mongoose'
import customerSchema from './schema-customer.js'

export default () => {
    return mongoose.model('Customer',customerSchema)
}