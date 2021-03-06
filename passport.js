const passport = require('passport');
const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require("passport-jwt");
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const User = require('./models/user');

require('dotenv').config();

passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
      if (err) {
        return done(err);
      };
      if (!user) {
        return done(null, false, { msg: "Incorrect username" });
      }
      bcrypt.compare(password, user.password, (err, res) => {
          if (res) { return done(null, user); console.log('logged in')}
          else {
             return done(null, false, {msg: "Incorrect password"});
          }
      });
    });
  })
);

passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('JWT'),
        secretOrKey   : process.env.JWT_KEY
    },
    function (jwtPayload, cb) {
        return User.findById(jwtPayload.id)
            .then(user => {
                return cb(null, {user});
            })
            .catch(err => {
                return cb(err);
            });
	//return cb(null);
    }
));
