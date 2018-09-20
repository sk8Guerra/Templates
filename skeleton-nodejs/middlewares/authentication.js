
const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  next();
  /*if ("token" in req.headers) {
    let token = req.headers.token
    if (typeof token !== 'undefined' &&
      token.toString().trim() !== '') {
        try {
          jwt.verify(req.headers.token, 'secret');
          next();
        } catch(err) {
          res.json({"status": false, "info": err});
        }
    } else {
      res.json({"status": false, "message": "Token is undefined or empty."});
    }
  } else {
      res.json({"status": false, "message": "Token doesn`t exist."});
  }*/
};
