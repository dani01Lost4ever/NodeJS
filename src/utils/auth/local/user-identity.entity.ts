import { User } from "../../../api/user/user.entity";

export interface UserIdentity {
  id: string;
  provider: string;
  credentials: {
    username: string;
    hashedPassword: string;
  };
  user: User;
}
