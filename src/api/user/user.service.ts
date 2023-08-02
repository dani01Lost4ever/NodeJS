import { User as UserModel } from "./user.model";
import { UserIdentity as UserIdentityModel } from "../../utils/auth/local/user-identity.model";
import { User } from "./user.entity";

import * as bcrypt from "bcrypt";
import { UserExistsError } from "../../errors/user-exist";

export class UserService {
  async add(
    user: User,
    credentials: { username: string; password: string }
  ): Promise<User> {
    const existingIdentity = await UserIdentityModel.findOne({
      "credentials.username": credentials.username,
    });
    if (existingIdentity) {
      throw new UserExistsError();
    }
    const hashedPassword = await bcrypt.hash(credentials.password, 10);
    const newUser = await UserModel.create(user);
    await UserIdentityModel.create({
      provider: "local",
      user: newUser._id,
      credentials: {
        username: credentials.username,
        hashedPassword,
      },
    });

    return newUser;
  }
}
export default new UserService();
