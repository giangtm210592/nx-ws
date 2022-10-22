export interface NewUser {
  username: string;
  password: string;
  email: string;
  fullName?: string;
  phone?: string;
}

export interface User {
  username: string;
  email: string;
  fullName?: string;
  phone?: string;
}
