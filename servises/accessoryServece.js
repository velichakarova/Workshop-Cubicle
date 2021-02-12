 const Accessory = require('../models/acssesoary');

 function  createAccessory(data){
    let accessory = new Accessory(data)
 }

 module.exports = {
     createAccessory,
 }