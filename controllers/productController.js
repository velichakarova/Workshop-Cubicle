const {Router} = require('express');
const productService = require('../servises/productService');
const accessoryService = require('../servises/accessoryServece');
const validateProduct =require('./helpers/productHelper')

const isAuth = require ('../middlewere/isAuth');
const isGuest = require ('../middlewere/isGuest')

const router = Router();

router.get('/', (req,res)=> {
    //console.log(req.query);
    let products = productService.getAll(req.query)
        .then(products =>{
            res.render('home',{title:'Browse', products})
        })
        .catch(() => res.status(500).end())
    
});

router.get('/create',isAuth, (req,res)=> {
    res.render('create',{title:'Create'})
});
router.post('/create',isAuth, validateProduct, (req,res)=> {

   productService.create(req.body, req.user._id)
   .then(() => res.redirect('/products'))
   .catch(() => res.status(500).end())
});  
router.get('/details/:productId', (req, res)=>{
    //console.log(req.params.productId);
    let product = productService.getOneWhitAccessories(req.params.productId)
    //console.log(product)
    .then(product=>{
        res.render('details',{title:'Porduct Deteils', product})
    })
    .catch(() => res.status(500).end())
    
});
router.get('/:productId/attach',isAuth, async(req,res)=>{
    let product = await productService.getOne(req.params.productId)
    console.log(product);
    let accessories = await accessoryService.getAllWithout(product.accessories);
    res.render('attachAccessory',{title:'Attach Accessoary', product, accessories})
});
router.post('/:productId/attach',isAuth, (req,res)=>{
    productService.attachAccessory(req.params.productId, req.body.accessory)
    .then(() =>res.redirect(`/products/details/${req.params.productId}`))

})
router.get('/:productId/edit',isAuth, (req,res)=>{
    productService.getOne(req.params.productId)
    .then(product=>{
        res.render('editCube', product)
    })
})
router.post('/:productId/edit',isAuth,validateProduct, (req,res)=>{
    productService.updateOne(req.params.productId, req.body)
    .then(response =>{
        res.redirect(`/products/details/${req.params.productId}`)
    })
    .catch(error=>{

    })
})
router.get('/:productId/delete',isAuth, (req,res)=>{
    productService.getOne(req.params.productId)
    
    .then(product=>{
        if(req.user._id != product.creator){
            res.redirect('/products')
        }else{
            res.render('deleteCube', product)
        }
        
    })
})
router.post('/:productId/delete',isAuth, (req,res)=>{
  productService.deleteOne(req.params.productId)
  .then(response =>res.redirect('/products'))
})



module.exports = router;