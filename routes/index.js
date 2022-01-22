const express=require('express');
const router=express.Router();
const homeController=require('../controllers/homeController');

console.log('router called');

router.get('/',homeController.home);
router.get('/sign-up',homeController.signUp);

router.post('/Create',homeController.Create);

router.use('/users',require('./users'));

module.exports=router;