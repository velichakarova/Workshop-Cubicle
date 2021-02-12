const {Router} = require('express');

const router = Router();

router.get('/create', (req,res)=>{
    res.render('createAccessory')
});

//validation middlewere or just validate incoming data
router.post('/create', (req,res)=>{
    console.log(req.body);
    res.redirect('/products')
})

module.exports = router;