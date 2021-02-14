const {Router} = require('express');
const accessoryService = require('../servises/accessoryServece')

const router = Router();

router.get('/create', (req,res)=>{
    res.render('createAccessory',{title:'Create Accessoary'})
});

//validation middlewere or just validate incoming data
router.post('/create', (req,res)=>{
    accessoryService.createAccessory(req.body)
    .then(() =>{
        res.redirect('/products')
    })
    .catch(() => res.status(500).end()) 
})

module.exports = router;