import mongoose from "mongoose"

const Productschema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    qty:{
        type:Number,
        default:5
    },
    company :{
        type:String,
        enum:{
          values:['Apple','Redmi','Vivo','Tata',"Kawasaki"],
          message:'Not support company'
        },
    },
})

export default mongoose.model('Product', Productschema);