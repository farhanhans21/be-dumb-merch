import { UpdateProfileDTO } from "../dto/profileDTO";
import { prisma } from "../libs/prisma";

export const updateProfile = async (body: UpdateProfileDTO, userId: number) => {
  const { username, ...rest } = body;
  return await prisma.profile.update({
    where: { 
      id: userId
    },
    data: {
      ...rest
    },
  });
};
