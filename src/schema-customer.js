import mongoose from 'mongoose'

const Schema = mongoose.Schema

export default new Schema({
   id : Number,
   firstName : String,
   lastName : String 
})