import { User } from './user.model';

export interface AuthedUser {
  user: User;
  accessToken: string;
}

export interface LoginParams {
  username: string;
  password: string;
}
