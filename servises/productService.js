const Cube = require('../models/Cube');
const uniqid = require('uniqid');
const fs = require('fs');

let productData = require('../config/products.json');

function getAll(){
    return productData;
}
function getOne(id){
    return productData.find(x=>x.id == id)
}

function create(data){

    let cube = new Cube(
        uniqid(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel
       );

       productData.push(cube);

       fs.writeFile(__dirname + '/../config/products.json',JSON.stringify(productData), (err)=>{
        if(err){   
        console.log(err);
        return;
        }
       })
    
}
module.exports = {
    create,
    getAll,
    getOne
}