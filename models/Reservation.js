const mongoose=require('mongoose');

const reservationSchema=new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true   
    },
    table :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Table',
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    time:{
        type:String,
        required:true

    },

    numberOfGuests:{  
        type:Number,
        required:true,

    },
  
     specialRequest:{
        type:String,
        default:''

     },
     status:{
        type:String,
        enum:['reserved','cancelled','completed'],
        default:'reserved'
     },

     waitlisted:{
           type :Boolean,
           default:false
     },

     price: {
    type: Number
}

} ,{timestamps:true});


module.exports=mongoose.model('Reservation',reservationSchema);