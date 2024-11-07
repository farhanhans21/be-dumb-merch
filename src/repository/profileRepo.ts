import { Profile, User } from "@prisma/client";
import { UpdateProfileDTO } from "../dto/profileDTO";
import { prisma } from "../libs/prisma";

export const updateProfile = async (body: UpdateProfileDTO, userId: number) => {
  const { ...rest } = body;
  return await prisma.profile.update({
    where: {
      userId: userId,
    },
    data: {
      ...rest,
    },
  });
};

export const getProfile = async (userId: number) => {
  
  let result: number[] 
  
  result =  await prisma.$queryRaw
    `
    SELECT 
    CONCAT("firstName", ' ', "lastName") AS fullname,
    address,
    phone,
    gender,
    image,
    u.email AS email
FROM 
    profile p
FULL JOIN 
    "user" u 
ON 
    u.id = p."userId"
WHERE 
    p."userId" = ${userId};
`
  return result[0] || null;
};
