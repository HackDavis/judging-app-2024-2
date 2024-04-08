interface AuthTokenInt {
  _id: string;
  name: string;
  email: string;
  password: string;
  specialty: string;
  role: string;
  iat: number;
  exp: number;
}

export default AuthTokenInt;
