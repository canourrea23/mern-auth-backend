require('dotenv').config();

// a passport strategy for authenticating with a JSON Web Token

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;

module.exports = (passport) => {
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        
    }))
}