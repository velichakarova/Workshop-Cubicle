const {Router} = require('express');
const productService = require('../servises/productService')

const router = Router();

router.get('/', (req,res)=> {
    res.render('home',{title:'Browse'})
});

router.get('/create', (req,res)=> {
    res.render('create',{title:'Create'})
});
router.post('/create', (req,res)=> {
   //Validate inputs
   let data = req.body

   productService.create(req.body);
   
  res.redirect('/products');
  
});
router.get('/details/:productId', (req, res)=>{
    console.log(req.params.productId);
    res.render('details',{title:'Porduct Deteils'})
})

module.exports = router;