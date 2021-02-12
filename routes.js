const { Router} = require('express');

const productController = require('./controllers/productController');
const homeController = require('./controllers/homeController');
const acssesoryController = require('./controllers/acssesoryControler')

const router = Router();

router.use('/',homeController);
router.use('/products' ,productController);
router.use('/accessories', acssesoryController);
router.get('*', (req,res)=>{
    res.render('404')
});


module.exports = router;