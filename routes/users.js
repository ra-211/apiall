
const express = require('express');
const router = require('express-promise-router')();


const UsersController = require(../controllers/users');

router.route('/singup')
   .post(UsersController.singup);

router.route('/singin')
   .post(UsersController.singin);

router.route('/home')
   .get(UsersController.home);




module.exports = router;
