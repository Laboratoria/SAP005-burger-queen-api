const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { Bearer } = require('permit');

const { User } = require('../db/models/index');

const permit = new Bearer();

const AuthController = {
  login(req, res, next) {
    const { email, password } = req.body;

    User.findOne({
      where: {
        email: email,
      },
    }).then((user) => {
      //username does not exists
      if (!user) return res.status(400).json({ code: 400, error: 'Invalid e-mail and/or password' });

      //password check
      if (!bcrypt.compareSync(password, user.password)) {
        return res.status(400).json({ code: 400, error: 'Invalid e-mail and/or password' });
      }

      //generate & sign token
      let jwtPayload = { email: user.email, restaurant: user.restaurant }; //public payload!
      let token = jwt.sign(jwtPayload, process.env.JWT_SECRET);

      return res.status(200).json({ token });
    }).catch(next);
  },

  auth(req, res, next) {
    // Try to find the bearer token in the request.
    const token = permit.check(req);

    // No token found, so ask for authentication.
    if (!token) {
      permit.fail(res);
      return res.status(401).json({ code: 401, error: 'Authentication is required!' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        permit.fail(res);
        return res.status(400).json({ code: 400, error: 'Failed to authenticate token!' });
      }

      //save username for next middleware
      req.loggedUser = decoded;
      next();
    });
  },
};

module.exports = AuthController;