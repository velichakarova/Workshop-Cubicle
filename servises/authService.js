const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { SALT_ROUND, SECRET} = require('../config/config');



const register = async ({username, password, repeatPassword})=>{
    if(password !== repeatPassword){
        throw{ message: 'The password it dosn\'t much!'}
    }

    let userName = await User.findOne({username})
     if(userName){
        throw{message:'User already excist!'}
    }

    let salt = await bcrypt.genSalt(SALT_ROUND)
    let hash = await bcrypt.hash(password, salt) 
    const user = new User({username, password:hash})

    return await user.save()
    
}

const login = async ({username, password})=>{

    let user = await User.findOne({username})

    if(!user){
        throw {message:'User not found!'}
    }
    let isMatch = await bcrypt.compare(password, user.password);
    //console.log(isMatch);

    if(!isMatch) {throw { message: 'Wrong password!'}}

    let token = jwt.sign({_id: user._id, username: user.username} ,SECRET)

    return token;
}

module.exports = {
    register,
    login,
}