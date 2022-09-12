import * as jwt from "jsonwebtoken";

import dotenv from 'dotenv'
dotenv.config()

const expiresIn = "10min"

export const generateToken = (input: AuthenticationData): string => {
  const token = jwt.sign(
    input,
    process.env.JWT_KEY as string,
    {
      expiresIn
    }
  );
  return token;
}

export type AuthenticationData = {
    id: string;
  }