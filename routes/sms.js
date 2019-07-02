const express = require('express');
const router = express.Router();


const smsCtrl = require('../controllers/sms');

router.get('/', smsCtrl.createSms);
router.post('/respond', smsCtrl.respondSms);


module.exports = router;