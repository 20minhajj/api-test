const Sms = require('../model/sms');

exports.createSms = (req, res, next) => {
  req.body.sms = JSON.parse(req.body.sms);
  const txt = new Sms({

    userId: "req.body.txt.userId",
    senderNumber: "req.body.txt.senderNumber",
    name: "req.body.txt.name",
    description: "req.body.txt.description",

  });

  txt.save().then(
    () => {
      res.status(201).json({
        message: 'Sms deliverd Successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
}

exports.respondSms = (req, res, next) => {
  req.body.sms = JSON.parse(req.body.sms);
  const txt = new Sms({

    userId: req.body.txt.userId,
    senderNumber: req.body.txt.senderNumber,
    name: req.body.txt.name,
    description: req.body.txt.description,

  });

  txt.save().then(
    () => {
      res.status(201).json({
        message: 'Sms replayed Successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: "Sms not Successfully replayed"
      });
    }
  );
}

exports.getAllSms = (req, res, next) => {
  Sms.find().then(
    (txt) => {
      res.status(200).json(txt);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

