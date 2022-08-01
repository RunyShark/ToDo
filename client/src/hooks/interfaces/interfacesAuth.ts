export interface LoginOrRegister {
  name?: string;
  email: string;
  password: string;
}

export interface AuthProps {
  Error: boolean;
  msg: string;
  user: User;
}

export interface User {
  uid: string;
  name: string;
  token: string;
}

export interface ErrosLogin {
  errors: Error[];
}

export interface Error {
  value: string;
  msg: string;
  param: string;
  location: string;
}

export interface CheckToken {
  Error: boolean;
  msg: string;
  uid: string;
  name: string;
  token: string;
}
