const express = require('express');
const router = express.Router();

const auth = require('./control');

router.get('/products', auth.getProducts);
router.get('/profil', auth.getUsers);
router.get('/products/aksesuar', auth.aksesuar);
router.get('/products/giyim', auth.giyim);
router.get('/categories', auth.categories);
router.post('/login', auth.login);
router.post('/register', auth.register);

module.exports = router;