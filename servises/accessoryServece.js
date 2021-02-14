 const Accessory = require('../models/Accessory');

 function  createAccessory(data){
    let accessory = new Accessory(data);

    return accessory.save();
 }


 async function getAll(){
     return await Accessory.find().lean()
  
 }
 function getAllWithout(ids){
    return Accessory.find({_id:{$nin: ids}}).lean();
}

 module.exports = {
     createAccessory,
     getAll,
     getAllWithout,
 }