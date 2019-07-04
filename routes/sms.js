const express = require('express');
const router = express.Router();


const smsCtrl = require('../controllers/sms');

router.get('/' , smsCtrl.getAllSms);
router.post('/sender', smsCtrl.createSms);
router.post('/respond', smsCtrl.respondSms);


module.exports = router;