const mongoose = require('mongoose')


const acssesorySchema = new mongoose.Schema({
    id:mongoose.Types.ObjectId,
    name:{
        type: String,
        required:true, 
    },
    description:{
        type: String,
        required:true,
        maxlength:50
    }, 
    imageUrl:{ 
        type:String,
        required:true,
        validate:/^https?/,
    },
    cube:[
        {
            type:mongoose.Types.ObjectId,
            ref:'Cube'
        }
    ]

})

module.exports = mongoose.model('Accessory', acssesorySchema );