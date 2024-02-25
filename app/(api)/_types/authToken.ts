interface AuthTokenInt {
  _id: string;
  email: string;
  password: string;
  iat: number;
  exp: number;
}

export default AuthTokenInt;
