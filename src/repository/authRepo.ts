import { RegisterDTo } from "../dto/authDTO";
import { prisma } from "../libs/prisma";

export const findUserByEmail = async (usernameOrEmail: string) => {
  return prisma.user.findFirst(
    {
        where:{ OR: [{username: usernameOrEmail}, {email: usernameOrEmail}]}
    }
  )
};


export const createUser = async (bodyRegis: RegisterDTo) => {

const firstName = bodyRegis.name.split(' ')[0];
const lastName = bodyRegis.name.split(' ')[1];

  return prisma.user.create({
data:{
  username: bodyRegis.name,
  email: bodyRegis.email,
  password: bodyRegis.password,
  role: bodyRegis.role, 
  profile:{
    create:{
        firstName: firstName,
        lastName: lastName,
    }
  }
}
  })
};
