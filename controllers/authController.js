const {Router} = require('express');
const authService = require('../servises/authService')
const { COOKIE_NAME } =require('../config/config')

const isAuth = require('../middlewere/isAuth');
const isGuest = require ('../middlewere/isGuest')

const router = Router();

router.get('/login',isGuest, (req,res)=>{
    res.render('login',{title: "Login"})
});
router.post('/login',isGuest, async(req,res)=>{
    //console.log(req.body);
const {username, password} = req.body;
try {
    let token = await authService.login({username, password})
    //console.log(token);
    res.cookie(COOKIE_NAME , token)
    res.redirect('/products')
} catch (error) {
    //console.log(error);
    res.render('login' , {error})
}

});
router.get('/register',isGuest, (req,res)=>{
    res.render('register', {title: "Register"})
});
router.post('/register',isGuest, async(req,res)=>{
       // console.log(req.body);
    try {
        let user = await authService.register(req.body);
        console.log(token);
        res.redirect('/auth/login')
        
    } catch (error) {
        res.render('register', {error})
    }
});

router.get('/logout',isAuth, (req,res)=>{
    res.clearCookie(COOKIE_NAME);
 
    res.redirect('/products')
})


module.exports = router