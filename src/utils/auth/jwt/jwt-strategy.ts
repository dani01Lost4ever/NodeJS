import passport from "passport";
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import { User as UserModel } from "../../../api/user/user.model";

export const JWT_SECRET = "secret";

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: JWT_SECRET,
    },
    async (token, done) => {
      try {
        console.log(token);
        const user = await UserModel.findById(token.id);
        if (user) {
          return done(null, user.toObject());
        } else {
          return done(null, false, { message: "invalid token" });
        }
      } catch (err) {
        done(err);
      }
    }
  )
);
