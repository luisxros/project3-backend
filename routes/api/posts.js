const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/posts');

// router.use(require('../../config/auth'));
// router.get('/', checkAuth, postsCtrl.posts);
router.post('/', postsCtrl.create);

// function checkAuth(req, res, next) {
//     if(req.user) return next();
//     return res.status(401).json({msg: 'not authorized'})

// }

module.exports = router;