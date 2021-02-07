const {Router} = require('express');
const productService = require('../servises/productService');
const validateProduct =require('./helpers/productHelper')

const router = Router();

router.get('/', (req,res)=> {
    //console.log(req.query);
    let products = productService.getAll(req.query);
    res.render('home',{title:'Browse', products})
});

router.get('/create', (req,res)=> {
    res.render('create',{title:'Create'})
});
router.post('/create',validateProduct, (req,res)=> {

   productService.create(req.body)
   .then(() => res.redirect('/products'))
   .catch(() => res.status(500).end())
});
router.get('/details/:productId', (req, res)=>{
    console.log(req.params.productId);
    let product = productService.getOne(req.params.productId)
    res.render('details',{title:'Porduct Deteils', product})
});



module.exports = router;