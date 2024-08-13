const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET || 'your_jwt_secret',
};

passport.use(new JwtStrategy(options, (payload, done) => {
  if (payload.username === 'testuser') {
    return done(null, { username: 'testuser' });
  } else {
    return done(null, false);
  }
}));

module.exports = passport;  // Make sure this line is correctly exporting the passport instance
