import { RoleEnum } from "@prisma/client";
import { LoginDTO, RegisterDTo } from "../dto/authDTO";
import * as authrepo from "../repository/authRepo";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const  register = async (bodyRegis: RegisterDTo) => {
  const existUser = await authrepo.findUserByEmail(bodyRegis.email);

  if (existUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(bodyRegis.password, 10);
  const generatedUsername = bodyRegis.email.split("@")[0];

  const register = await authrepo.createUser({
    ...bodyRegis,
    name: generatedUsername,
    password: hashedPassword,
    role: bodyRegis.role === "ADMIN" ? RoleEnum.ADMIN : RoleEnum.USER
  });
  return register;
};


export const login = async (bodyLogin: LoginDTO) => {

  
  const getUser = await authrepo.findUserByEmail(bodyLogin.username);

  if (!getUser) {
    throw new Error("User not found");
  }
  const isMatch = await bcrypt.compare(
    bodyLogin.password,
    getUser.password as string
  );
  isMatch
    ? isMatch
    : () => {
        throw new Error("invalid password");
      };

  const token = jwt.sign(
    {
      id: getUser.id,
      username: getUser.email,
      role: getUser.role
    },
    process.env.JWT_SECRET || "your-secret-key",
    { expiresIn: "1d" }
  );
  return token;
};
