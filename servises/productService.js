const Cube = require('../models/Cube');
const uniqid = require('uniqid');
const fs = require('fs/promises');
const path = require('path')

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

       return fs.writeFile(
            path.join(__dirname,  '../config/products.json'),
            JSON.stringify(productData),
            )
           
}
module.exports = {
    create,
    getAll,
    getOne
}