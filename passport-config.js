const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user');
const bcrypt = require('bcrypt');




async function initialize(passport) {
    const authenticateUser = async (email, password, done) => {
        const user = await User.findOne({ email: email }).lean();

        if (user == null) {
            return done(null, false, { message: 'No user with that email' })
        }

        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user)
            } else {
                return done(null, false, { message: "Password incorrect" })
            }
        } catch (error) {
            return done(error)
        }

    }
    passport.use(new LocalStrategy({ usernameField: "email" }, authenticateUser));

    passport.serializeUser((user, done) => done(null, user._id));
    passport.deserializeUser(async (_id, done) => {

        const userById = await User.findById(_id).lean();
        done(null, userById)
    })

}

module.exports = initialize