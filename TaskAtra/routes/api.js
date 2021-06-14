const router=require('express').Router();
const user = require('../controller/user');

router.post('/newUser',user.newUser)
router.get('/getAllUsers',user.getAllUsers)


module.exports  = router;